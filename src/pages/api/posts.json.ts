// src/pages/api/posts.json.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  const nPosts = parseInt(url.searchParams.get('nPosts') || '5', 10);
  const posts = await getCollection('blog');
  
  const sortedPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, nPosts)
    .map(post => ({
      id: post.id,
      slug: post.slug,
      data: post.data,
      // Exclude the 'body' to avoid circular references
    }));

  return new Response(JSON.stringify(sortedPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};