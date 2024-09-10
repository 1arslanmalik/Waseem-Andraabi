// src/middleware/rateLimiter.ts
import type { APIContext } from 'astro';

interface RateLimiterOptions {
  maxRequests: number;
  windowMs: number;
}

interface RequestData {
  count: number;
  resetTime: number;
}

const ipRequestMap = new Map<string, RequestData>();

export function createRateLimiter({ maxRequests, windowMs }: RateLimiterOptions) {
  return function rateLimiter(context: APIContext) {
    const now = Date.now();
    const ip = context.clientAddress || 'unknown';
    console.log("IP - ", ip);

    // Check local storage first
    let localStorageData: RequestData | null = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = localStorage.getItem(`rateLimiter_${ip}`);
      if (storedData) {
        localStorageData = JSON.parse(storedData);
      }
    }

    // Merge local storage data with in-memory data
    let requestData = ipRequestMap.get(ip) || localStorageData || { count: 0, resetTime: now + windowMs };

    if (now > requestData.resetTime) {
      requestData = { count: 1, resetTime: now + windowMs };
    } else {
      requestData.count++;
    }

    // Update both in-memory and local storage
    ipRequestMap.set(ip, requestData);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(`rateLimiter_${ip}`, JSON.stringify(requestData));
    }

    if (requestData.count > maxRequests) {
      return false;
    }

    return true;
  };
}

// Helper function to clear rate limit data (can be used for testing or manual resets)
export function clearRateLimitData(ip: string) {
  ipRequestMap.delete(ip);
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(`rateLimiter_${ip}`);
  }
}