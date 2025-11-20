import { NextRequest, NextResponse } from 'next/server';
import { sanitizeInput, isValidEmail, validateInput, checkRateLimit } from '@/lib/security';

// In production, store this in environment variables
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

        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Rate limiting (5 requests per minute per IP)
        const rateLimitCheck = checkRateLimit(`contact-${ip}`, 5, 60000);
        if (!rateLimitCheck.allowed) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                {
                    status: 429,
                    headers: {
                        'Retry-After': '60'
                    }
                }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const { name, email, message, csrfToken } = body;

        // CSRF token validation (in production, validate against session)
        if (!csrfToken || typeof csrfToken !== 'string') {
            return NextResponse.json(
                { error: 'Invalid request' },
                { status: 400 }
            );
        }

        // Validate and sanitize name
        const nameValidation = validateInput(name, {
            maxLength: 100,
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

        // Here you would:
        // 1. Send email using a service like SendGrid, Resend, or Nodemailer
        // 2. Store in database with prepared statements (prevents SQL injection)
        // 3. Log the submission securely

        // For now, we'll just log it (in production, use proper logging)
        console.log('Contact form submission:', {
            name: nameValidation.sanitized,
            email: emailValidation.sanitized,
            message: messageValidation.sanitized.substring(0, 100) + '...',
            timestamp: new Date().toISOString(),
            ip: ip.substring(0, 15) // Truncate IP for privacy
        });

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 500));

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
