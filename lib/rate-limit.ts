/**
 * Enhanced rate limiting with multiple tiers and IP tracking
 */

interface RateLimitRecord {
    count: number;
    resetTime: number;
    blocked: boolean;
    blockUntil?: number;
}

const requestCounts = new Map<string, RateLimitRecord>();
const blockedIPs = new Set<string>();

// Cleanup old entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    for (const [key, value] of requestCounts.entries()) {
        if (now > value.resetTime && (!value.blocked || (value.blockUntil && now > value.blockUntil))) {
            requestCounts.delete(key);
        }
    }
}, 5 * 60 * 1000);

/**
 * Multi-tier rate limiting
 * - Tier 1: 5 requests per minute (normal)
 * - Tier 2: 20 requests per hour (if tier 1 exceeded multiple times)
 * - Tier 3: Block for 1 hour (if tier 2 exceeded)
 */
export function checkAdvancedRateLimit(
    identifier: string,
    tier: 'strict' | 'normal' | 'lenient' = 'normal'
): {
    allowed: boolean;
    remaining: number;
    resetIn: number;
    blocked?: boolean;
    reason?: string;
} {
    const now = Date.now();

    // Check if IP is permanently blocked
    if (blockedIPs.has(identifier)) {
        return {
            allowed: false,
            remaining: 0,
            resetIn: 3600000, // 1 hour
            blocked: true,
            reason: 'IP blocked due to abuse'
        };
    }

    const record = requestCounts.get(identifier);

    // Tier configurations
    const configs = {
        strict: { maxRequests: 3, windowMs: 60000 }, // 3/min
        normal: { maxRequests: 5, windowMs: 60000 }, // 5/min
        lenient: { maxRequests: 10, windowMs: 60000 } // 10/min
    };

    const config = configs[tier];

    // Check if temporarily blocked
    if (record?.blocked && record.blockUntil && now < record.blockUntil) {
        return {
            allowed: false,
            remaining: 0,
            resetIn: record.blockUntil - now,
            blocked: true,
            reason: 'Temporarily blocked for excessive requests'
        };
    }

    // Reset or create new record
    if (!record || now > record.resetTime) {
        const resetTime = now + config.windowMs;
        requestCounts.set(identifier, {
            count: 1,
            resetTime,
            blocked: false
        });
        return {
            allowed: true,
            remaining: config.maxRequests - 1,
            resetIn: config.windowMs
        };
    }

    // Check if limit exceeded
    if (record.count >= config.maxRequests) {
        // If exceeded 3 times in a row, block for 1 hour
        const violations = record.count - config.maxRequests;
        if (violations >= 10) {
            const blockUntil = now + 3600000; // 1 hour
            record.blocked = true;
            record.blockUntil = blockUntil;

            // Add to permanent block list if violations are severe
            if (violations >= 50) {
                blockedIPs.add(identifier);
            }

            return {
                allowed: false,
                remaining: 0,
                resetIn: blockUntil - now,
                blocked: true,
                reason: `Blocked for ${violations} violations`
            };
        }

        return {
            allowed: false,
            remaining: 0,
            resetIn: record.resetTime - now,
            reason: 'Rate limit exceeded'
        };
    }

    // Increment count
    record.count++;
    return {
        allowed: true,
        remaining: config.maxRequests - record.count,
        resetIn: record.resetTime - now
    };
}

/**
 * Check for suspicious patterns that might indicate an attack
 */
export function detectSuspiciousActivity(
    ip: string,
    userAgent: string,
    requestBody?: any
): { suspicious: boolean; reason?: string } {
    // Check for missing or suspicious user agent
    if (!userAgent || userAgent.length < 10) {
        return { suspicious: true, reason: 'Missing or invalid user agent' };
    }

    // Check for common bot patterns
    const botPatterns = [
        /bot/i,
        /crawler/i,
        /spider/i,
        /scraper/i,
        /curl/i,
        /wget/i,
        /python/i,
        /java/i,
    ];

    if (botPatterns.some(pattern => pattern.test(userAgent))) {
        return { suspicious: true, reason: 'Bot-like user agent detected' };
    }

    // Check for extremely large payloads (potential DoS)
    if (requestBody) {
        const bodySize = JSON.stringify(requestBody).length;
        if (bodySize > 50000) { // 50KB limit
            return { suspicious: true, reason: 'Payload too large' };
        }
    }

    return { suspicious: false };
}

/**
 * Manually block an IP address
 */
export function blockIP(ip: string): void {
    blockedIPs.add(ip);
    requestCounts.set(ip, {
        count: 999,
        resetTime: Date.now() + 86400000, // 24 hours
        blocked: true,
        blockUntil: Date.now() + 86400000
    });
}

/**
 * Unblock an IP address
 */
export function unblockIP(ip: string): void {
    blockedIPs.delete(ip);
    requestCounts.delete(ip);
}

/**
 * Get current rate limit stats
 */
export function getRateLimitStats(): {
    totalTracked: number;
    blockedCount: number;
    permanentBlocks: number;
} {
    let blockedCount = 0;
    for (const record of requestCounts.values()) {
        if (record.blocked) blockedCount++;
    }

    return {
        totalTracked: requestCounts.size,
        blockedCount,
        permanentBlocks: blockedIPs.size
    };
}
