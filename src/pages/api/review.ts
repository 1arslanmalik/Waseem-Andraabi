import { PrismaClient } from '@prisma/client';
import { createRateLimiter } from '../../middleware/rateLimiter';

const prisma = new PrismaClient();
const rateLimiter = createRateLimiter({ maxRequests: 5, windowMs: 60000 }); // 1 request per minute for POST

export async function GET() {
    const reviews = await prisma.reviewPost.findMany();
    if(!reviews){
        return new Response("Can't get reviews from DB.", {status: 500});
    }
    return new Response(JSON.stringify(reviews), {status: 200});
}

export async function POST(context) {
    const validRequest = rateLimiter(context);
    if (!validRequest) {
        return new Response("Too many requests", { status: 429 });
    }

    const { id, name, rating, comment } = await context.request.json();

    try {
        await prisma.reviewPost.create({
            data: {
                id,
                name,
                rating,
                comment,
            },
        });
        return new Response("Review Created.", { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Failed to create review.', { status: 500 });
    }
}
