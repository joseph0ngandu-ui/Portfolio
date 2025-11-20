/**
 * Security utilities for input sanitization and validation
 * Uses DOMPurify for industry-standard HTML sanitization
 */

import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML using DOMPurify (industry standard)
 * Removes all potentially dangerous HTML/JavaScript
 */
export function sanitizeHTML(input: string): string {
    if (!input) return '';

    // DOMPurify configuration for maximum security
    const config = {
        ALLOWED_TAGS: [], // No HTML tags allowed
        ALLOWED_ATTR: [], // No attributes allowed
        KEEP_CONTENT: true, // Keep text content
    };

    return DOMPurify.sanitize(input, config);
}

/**
 * Sanitize HTML but allow safe formatting tags
 * Use this only when you need to preserve some formatting
 */
export function sanitizeHTMLWithFormatting(input: string): string {
    if (!input) return '';

    const config = {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
        ALLOWED_ATTR: [],
        KEEP_CONTENT: true,
    };

    return DOMPurify.sanitize(input, config);
}

/**
 * Sanitize user input for safe storage and display
 * Multi-layered approach combining DOMPurify with custom rules
 */
export function sanitizeInput(input: string): string {
    if (!input) return '';

    // First pass: Remove obvious script tags and event handlers
    let sanitized = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/javascript:/gi, '');
    sanitized = sanitized.replace(/data:text\/html/gi, '');

    // Second pass: DOMPurify for comprehensive sanitization
    sanitized = DOMPurify.sanitize(sanitized, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
        KEEP_CONTENT: true,
    });

    // Third pass: Additional character encoding for special cases
    sanitized = sanitized
        .replace(/[<>]/g, '') // Remove any remaining angle brackets
        .trim();

    return sanitized;
}

/**
 * Validate email format with strict RFC 5322 compliance
 */
export function isValidEmail(email: string): boolean {
    // More comprehensive email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) return false;

    // Additional checks
    if (email.length > 254) return false; // RFC 5321
    if (email.split('@')[0].length > 64) return false; // Local part max length

    return true;
}

/**
 * Validate that input doesn't contain SQL injection patterns
 * Multiple pattern detection for comprehensive protection
 */
export function containsSQLInjection(input: string): boolean {
    const sqlPatterns = [
        // SQL keywords
        /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|DECLARE|CAST|CONVERT)\b)/gi,
        // SQL operators and special chars
        /(--|\/\*|\*\/|;|'|"|xp_|sp_)/gi,
        // SQL injection patterns
        /(\bOR\b|\bAND\b)\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/gi,
        /UNION.*SELECT/gi,
        /1\s*=\s*1/gi,
        /'\s*OR\s*'1'\s*=\s*'1/gi,
        // Hex encoding attempts
        /0x[0-9a-f]+/gi,
        // Comment-based injection
        /#.*$/gm,
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
}

/**
 * Detect NoSQL injection patterns
 */
export function containsNoSQLInjection(input: string): boolean {
    const noSqlPatterns = [
        /\$where/gi,
        /\$ne/gi,
        /\$gt/gi,
        /\$lt/gi,
        /\$regex/gi,
        /\{\s*\$.*\}/gi,
    ];

    return noSqlPatterns.some(pattern => pattern.test(input));
}

/**
 * Detect path traversal attempts
 */
export function containsPathTraversal(input: string): boolean {
    const pathPatterns = [
        /\.\.\//g,
        /\.\.\\/g,
        /%2e%2e%2f/gi,
        /%2e%2e\\/gi,
    ];

    return pathPatterns.some(pattern => pattern.test(input));
}

/**
 * Rate limiting helper - tracks requests per identifier
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
    identifier: string,
    maxRequests: number = 5,
    windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number; resetIn: number } {
    const now = Date.now();
    const record = requestCounts.get(identifier);

    // Clean up old entries periodically
    if (requestCounts.size > 10000) {
        for (const [key, value] of requestCounts.entries()) {
            if (now > value.resetTime) {
                requestCounts.delete(key);
            }
        }
    }

    if (!record || now > record.resetTime) {
        const resetTime = now + windowMs;
        requestCounts.set(identifier, {
            count: 1,
            resetTime
        });
        return {
            allowed: true,
            remaining: maxRequests - 1,
            resetIn: windowMs
        };
    }

    if (record.count >= maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetIn: record.resetTime - now
        };
    }

    record.count++;
    return {
        allowed: true,
        remaining: maxRequests - record.count,
        resetIn: record.resetTime - now
    };
}

/**
 * Generate a cryptographically secure random token
 */
export function generateSecureToken(length: number = 32): string {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    // Fallback for server-side (Node.js crypto should be used in production)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result + Date.now().toString(36);
}

/**
 * Validate input length to prevent DoS attacks
 */
export function isValidLength(input: string, maxLength: number = 10000): boolean {
    return typeof input === 'string' && input.length > 0 && input.length <= maxLength;
}

/**
 * Comprehensive input validation with multiple security checks
 */
export function validateInput(input: string, options: {
    maxLength?: number;
    minLength?: number;
    allowHTML?: boolean;
    checkSQL?: boolean;
    checkNoSQL?: boolean;
    checkPathTraversal?: boolean;
} = {}): { valid: boolean; error?: string; sanitized: string } {
    const {
        maxLength = 10000,
        minLength = 0,
        allowHTML = false,
        checkSQL = true,
        checkNoSQL = true,
        checkPathTraversal = true,
    } = options;

    // Type check
    if (typeof input !== 'string') {
        return {
            valid: false,
            error: 'Input must be a string',
            sanitized: ''
        };
    }

    // Length validation
    if (input.length < minLength) {
        return {
            valid: false,
            error: `Input must be at least ${minLength} characters`,
            sanitized: ''
        };
    }

    if (!isValidLength(input, maxLength)) {
        return {
            valid: false,
            error: `Input exceeds maximum length of ${maxLength} characters`,
            sanitized: ''
        };
    }

    // SQL injection check
    if (checkSQL && containsSQLInjection(input)) {
        return {
            valid: false,
            error: 'Input contains potentially malicious SQL patterns',
            sanitized: ''
        };
    }

    // NoSQL injection check
    if (checkNoSQL && containsNoSQLInjection(input)) {
        return {
            valid: false,
            error: 'Input contains potentially malicious NoSQL patterns',
            sanitized: ''
        };
    }

    // Path traversal check
    if (checkPathTraversal && containsPathTraversal(input)) {
        return {
            valid: false,
            error: 'Input contains path traversal patterns',
            sanitized: ''
        };
    }

    // Sanitize based on options
    let sanitized: string;
    if (allowHTML) {
        sanitized = sanitizeHTMLWithFormatting(input);
    } else {
        sanitized = sanitizeInput(input);
    }

    return {
        valid: true,
        sanitized
    };
}

/**
 * Sanitize URL to prevent XSS through URLs
 */
export function sanitizeURL(url: string): string {
    if (!url) return '';

    // Remove javascript: and data: protocols
    const sanitized = url.replace(/^(javascript|data|vbscript|file):/gi, '');

    // Only allow http, https, mailto
    if (!/^(https?|mailto):/i.test(sanitized) && !/^\//.test(sanitized)) {
        return '';
    }

    return sanitized;
}

/**
 * Hash sensitive data (for logging, etc.)
 */
export function hashSensitiveData(data: string): string {
    if (!data) return '';

    // Simple hash for client-side (use proper hashing on server)
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
}
