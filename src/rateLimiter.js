// const rateLimits = new Map();

// function getIP(request) {
//     const headers = {};
//     for (const [key, value] of request.headers.entries()) {
//         headers[key] = value;
//     }

//     const ipSources = {
//         'x-forwarded-for': headers['x-forwarded-for']?.split(',')[0].trim(),
//         'cf-connecting-ip': headers['cf-connecting-ip'],
//         'x-real-ip': headers['x-real-ip'],
//         'remoteAddress': request.connection?.remoteAddress
//     };

//     console.log('IP Sources:', JSON.stringify(ipSources, null, 2));

//     return ipSources['x-forwarded-for'] ||
//         ipSources['cf-connecting-ip'] ||
//         ipSources['x-real-ip'] ||
//         ipSources['remoteAddress'] ||
//         'unknown';
// }

// export default function rateLimiter(request) {
//     const ip = getIP(request);
//     console.log('Detected IP:', ip);

//     const now = Date.now();
//     const windowMs = 60 * 1000 * 5; // 1 minute
//     const maxRequests = 1; // Max requests per minute

//     if (ip === 'unknown') {
//         console.warn('Unable to determine IP address. Rate limiting disabled.');
//         return { success: true };
//     }

//     const userRequests = rateLimits.get(ip) || [];
//     const recentRequests = userRequests.filter(timestamp => now - timestamp < windowMs);

//     if (recentRequests.length >= maxRequests) {
//         console.log(`Rate limit exceeded for IP: ${ip}`);
//         return { success: false };
//     }

//     recentRequests.push(now);
//     rateLimits.set(ip, recentRequests);

//     console.log(`Request allowed for IP: ${ip}. Count: ${recentRequests.length}`);
//     return { success: true };
// }