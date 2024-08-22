/* empty css                                 */
import { a as createComponent, r as renderTemplate } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Blod = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<!-- ---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { FaCalendarAlt, FaUser, FaComments } from 'react-icons/fa';
import TiltedTrianlge from '../components/TiltedTrianlge.astro';
import BlogPost from '../components/BlogPost.astro';
import RecentPost from '../components/RecentPost.astro';

const allBlogPosts = [
  {
    id: 1,
    title: "How to Get Pregnant After Miscarriage: A Guide to a Healthy Pregnancy",
    excerpt: "Experiencing a miscarriage can be a difficult event, both mentally and physically. However, many women who have gone through this are eager to conceive again and achieve a healthy pregnancy.",
    author: "Dr. Rhythm Gupta",
    date: "06 Aug",
    comments: 0,
    image: "/blog-placeholder-2.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
];


const recentPosts = allBlogPosts.slice(0, 5); // Get the 5 most recent posts
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
	</head>
	<body class="bg-cream">
		<Header />
		<TiltedTrianlge></TiltedTrianlge>
		<main class="container mx-auto px-4 py-8 lg:flex lg:space-x-8">
			<div class="lg:w-2/3">
				<h1 class="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Our Blog</h1>
				<div class="space-y-6" id="blogPosts">
					{allBlogPosts.slice(0, 3).map((post) => (
						<BlogPost post={post}/>
					))}
				</div>
				<div class="text-center mt-8">
					<button id="viewMoreBtn" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">View More</button>
				</div>
			</div>
			<div class="lg:w-1/3 mt-8 lg:mt-0">
				<div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm p-4">
					<h2 class="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
					<ul class="space-y-4">
						{recentPosts.map((post) => (
							<RecentPost post={post}/>
						))}
					</ul>
				</div>
			</div>
		</main>
		<Footer />

		<script>
			let currentPostCount = 5;
			const viewMoreBtn = document.getElementById('viewMoreBtn');
			const blogPostsContainer = document.getElementById('blogPosts');

			viewMoreBtn.addEventListener('click', () => {
				const nextPosts = allBlogPosts.slice(currentPostCount, currentPostCount + 5);
				if (nextPosts.length > 0) {
					nextPosts.forEach(post => {
						const article = document.createElement('article');
						article.className = 'bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300';
						article.innerHTML = \`
							<div class="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
								<img src="\${post.image}" alt="\${post.title}" class="object-cover w-full h-full" />
							</div>
							<div class="p-4">
								<h2 class="text-xl font-semibold text-gray-800 mb-2">
									<a href="/blog/\${post.id}" class="hover:text-blue-600">\${post.title}</a>
								</h2>
								<p class="text-gray-600 text-sm mb-4 line-clamp-3 sm:line-clamp-2">\${post.excerpt}</p>
								<div class="flex items-center justify-between text-gray-500 text-xs">
									<span class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
										\${post.author}
									</span>
									<span class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
										\${post.date}
									</span>
									<span class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
										\${post.comments} Comments
									</span>
								</div>
							</div>
						\`;
						blogPostsContainer.appendChild(article);
					});
					currentPostCount += 5;
					if (currentPostCount >= allBlogPosts.length) {
						viewMoreBtn.style.display = 'none';
					}
				} else {
					viewMoreBtn.style.display = 'none';
				}
			});
		<\/script>
	</body>
</html> -->`], [`<!-- ---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { FaCalendarAlt, FaUser, FaComments } from 'react-icons/fa';
import TiltedTrianlge from '../components/TiltedTrianlge.astro';
import BlogPost from '../components/BlogPost.astro';
import RecentPost from '../components/RecentPost.astro';

const allBlogPosts = [
  {
    id: 1,
    title: "How to Get Pregnant After Miscarriage: A Guide to a Healthy Pregnancy",
    excerpt: "Experiencing a miscarriage can be a difficult event, both mentally and physically. However, many women who have gone through this are eager to conceive again and achieve a healthy pregnancy.",
    author: "Dr. Rhythm Gupta",
    date: "06 Aug",
    comments: 0,
    image: "/blog-placeholder-2.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
  {
    id: 2,
    title: "Is IVF Treatment the Right Option?",
    excerpt: "Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.",
    author: "Dr. Sarah Johnson",
    date: "03 Aug",
    comments: 0,
    image: "/blog-placeholder-3.jpg"
  },
];


const recentPosts = allBlogPosts.slice(0, 5); // Get the 5 most recent posts
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
	</head>
	<body class="bg-cream">
		<Header />
		<TiltedTrianlge></TiltedTrianlge>
		<main class="container mx-auto px-4 py-8 lg:flex lg:space-x-8">
			<div class="lg:w-2/3">
				<h1 class="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Our Blog</h1>
				<div class="space-y-6" id="blogPosts">
					{allBlogPosts.slice(0, 3).map((post) => (
						<BlogPost post={post}/>
					))}
				</div>
				<div class="text-center mt-8">
					<button id="viewMoreBtn" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">View More</button>
				</div>
			</div>
			<div class="lg:w-1/3 mt-8 lg:mt-0">
				<div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm p-4">
					<h2 class="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
					<ul class="space-y-4">
						{recentPosts.map((post) => (
							<RecentPost post={post}/>
						))}
					</ul>
				</div>
			</div>
		</main>
		<Footer />

		<script>
			let currentPostCount = 5;
			const viewMoreBtn = document.getElementById('viewMoreBtn');
			const blogPostsContainer = document.getElementById('blogPosts');

			viewMoreBtn.addEventListener('click', () => {
				const nextPosts = allBlogPosts.slice(currentPostCount, currentPostCount + 5);
				if (nextPosts.length > 0) {
					nextPosts.forEach(post => {
						const article = document.createElement('article');
						article.className = 'bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300';
						article.innerHTML = \\\`
							<div class="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
								<img src="\\\${post.image}" alt="\\\${post.title}" class="object-cover w-full h-full" />
							</div>
							<div class="p-4">
								<h2 class="text-xl font-semibold text-gray-800 mb-2">
									<a href="/blog/\\\${post.id}" class="hover:text-blue-600">\\\${post.title}</a>
								</h2>
								<p class="text-gray-600 text-sm mb-4 line-clamp-3 sm:line-clamp-2">\\\${post.excerpt}</p>
								<div class="flex items-center justify-between text-gray-500 text-xs">
									<span class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
										\\\${post.author}
									</span>
									<span class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
										\\\${post.date}
									</span>
									<span class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
										\\\${post.comments} Comments
									</span>
								</div>
							</div>
						\\\`;
						blogPostsContainer.appendChild(article);
					});
					currentPostCount += 5;
					if (currentPostCount >= allBlogPosts.length) {
						viewMoreBtn.style.display = 'none';
					}
				} else {
					viewMoreBtn.style.display = 'none';
				}
			});
		<\/script>
	</body>
</html> -->`])));
}, "C:/Users/arsla/programming/src/pages/blod.astro", void 0);

const $$file = "C:/Users/arsla/programming/src/pages/blod.astro";
const $$url = "/blod";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blod,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
