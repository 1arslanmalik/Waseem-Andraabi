// src/pages/api/posts.json.ts
import type { APIRoute, AstroGlobal } from 'astro';
import { getCollection } from 'astro:content';

export const GET= async ({request}: AstroGlobal) => {
  // console.log(url.searchParams)
  // const start = parseInt(url.searchParams.get('start') || '0', 10)
  // const end = parseInt(url.searchParams.get('end') || '5', 10);

const query = getAstroQueryParams(request);

  console.log('params', query);



  const {start, end} = Astro.url.searchParams.get("search") || "";
  // const posts = await getCollection('blog');

  console.log("str", start)
  console.log("end", end)
  
  const sortedPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(start, end)
    .map(post => ({
      id: post.id,
      slug: post.slug,
      data: post.data,
    }));

  return new Response(JSON.stringify(sortedPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export function getAstroQueryParams(request: Request){
    const url = new URL(request.url);
    return Object.fromEntries(url.searchParams);
}