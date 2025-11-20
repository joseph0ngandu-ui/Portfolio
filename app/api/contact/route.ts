import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sanitizeInput, isValidEmail, validateInput } from '@/lib/security';
import { checkAdvancedRateLimit, detectSuspiciousActivity } from '@/lib/rate-limit';

// Initialize Resend with API key from environment variables
// Use a dummy key during build if not available
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://josephngandu.com',
    'https://www.josephngandu.com',
];

export async function POST(request: NextRequest) {
    try {
        // CORS check
        const origin = request.headers.get('origin');
        if (origin && !ALLOWED_ORIGINS.includes(origin)) {
            return NextResponse.json(
                { error: 'Unauthorized origin' },
                { status: 403 }
            );
        }

        // Get client IP and user agent
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            request.headers.get('x-real-ip') ||
            'unknown';
        const userAgent = request.headers.get('user-agent') || '';

        // Check for suspicious activity
        const suspiciousCheck = detectSuspiciousActivity(ip, userAgent);
        if (suspiciousCheck.suspicious) {
            console.warn(`Suspicious activity from ${ip}: ${suspiciousCheck.reason}`);
            return NextResponse.json(
                { error: 'Request rejected' },
                { status: 403 }
            );
        }

        // Advanced rate limiting (strict tier - 3 requests per minute)
        const rateLimitCheck = checkAdvancedRateLimit(`contact-${ip}`, 'strict');
        if (!rateLimitCheck.allowed) {
            console.warn(`Rate limit exceeded for ${ip}: ${rateLimitCheck.reason || 'Too many requests'}`);
            return NextResponse.json(
                {
                    error: rateLimitCheck.blocked
                        ? 'Your IP has been temporarily blocked due to excessive requests.'
                        : 'Too many requests. Please try again later.',
                    retryAfter: Math.ceil(rateLimitCheck.resetIn / 1000)
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': String(Math.ceil(rateLimitCheck.resetIn / 1000)),
                        'X-RateLimit-Remaining': String(rateLimitCheck.remaining),
                    }
                }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const { name, email, message, csrfToken } = body;

        // CSRF token validation
        if (!csrfToken || typeof csrfToken !== 'string') {
            return NextResponse.json(
                { error: 'Invalid request' },
                { status: 400 }
            );
        }

        // Validate and sanitize name
        const nameValidation = validateInput(name, {
            maxLength: 100,
            minLength: 1,
            checkSQL: true
        });
        if (!nameValidation.valid) {
            return NextResponse.json(
                { error: nameValidation.error || 'Invalid name' },
                { status: 400 }
            );
        }

        // Validate email
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const emailValidation = validateInput(email, {
            maxLength: 254,
            minLength: 1,
            checkSQL: true
        });
        if (!emailValidation.valid) {
            return NextResponse.json(
                { error: emailValidation.error || 'Invalid email' },
                { status: 400 }
            );
        }

        // Validate and sanitize message
        const messageValidation = validateInput(message, {
            maxLength: 5000,
            minLength: 1,
            checkSQL: true
        });
        if (!messageValidation.valid) {
            return NextResponse.json(
                { error: messageValidation.error || 'Invalid message' },
                { status: 400 }
            );
        }

        // Check if all fields are filled
        if (!nameValidation.sanitized.trim() ||
            !emailValidation.sanitized.trim() ||
            !messageValidation.sanitized.trim()) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Send email using Resend
        try {
            // Check if API key is configured
            if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
                console.error('RESEND_API_KEY not configured');
                return NextResponse.json(
                    { error: 'Email service not configured. Please contact directly via email.' },
                    { status: 503 }
                );
            }

            const data = await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain
                to: ['joseph.0.ngandu@icloud.com'], // Your email
                replyTo: emailValidation.sanitized,
                subject: `Portfolio Contact: ${nameValidation.sanitized}`,
                html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #0a0a0a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f5f5f5; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
                .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">From</div>
                    <div class="value">${nameValidation.sanitized}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value">
                      <a href="mailto:${emailValidation.sanitized}" style="color: #0066cc; text-decoration: none;">
                        ${emailValidation.sanitized}
                      </a>
                    </div>
                  </div>
                  <div class="field">
                    <div class="label">Message</div>
                    <div class="value" style="white-space: pre-wrap;">${messageValidation.sanitized}</div>
                  </div>
                  <div class="footer">
                    <p>Sent from your portfolio contact form</p>
                    <p>IP: ${ip.substring(0, 15)}</p>
                    <p>Time: ${new Date().toISOString()}</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
            });

            console.log('Email sent successfully:', data);

            return NextResponse.json(
                {
                    success: true,
                    message: 'Message sent successfully'
                },
                {
                    status: 200,
                    headers: {
                        'X-Content-Type-Options': 'nosniff',
                        'X-Frame-Options': 'DENY',
                    }
                }
            );

        } catch (emailError) {
            console.error('Resend error:', emailError);

            // If Resend fails, return a helpful error
            return NextResponse.json(
                { error: 'Failed to send email. Please try contacting directly via email.' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Contact form error:', error);

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Reject other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}

export async function PUT() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}

export async function DELETE() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}
