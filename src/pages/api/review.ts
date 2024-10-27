// src/pages/api/reviews.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const reviews = await prisma.reviewPost.findMany();
    if(!reviews){
        return new Response("Can't get reviews from DB.", {status: 500})
    }
    return new Response(JSON.stringify(reviews), {status: 200})
}

export async function POST({ request }) {
    const { id, name, rating, comment } = await request.json();

    try {
        await prisma.reviewPost.create({
            data: {
                id,
                name,
                rating,
                comment,
            },
        });
        return new Response("Review Created.", { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response('Failed to create review.', { status: 500 });
    }
}