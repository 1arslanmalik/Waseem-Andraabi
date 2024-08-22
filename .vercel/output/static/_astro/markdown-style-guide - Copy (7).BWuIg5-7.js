import{c as e,r as a,m as t,u as o}from"./hoisted.DjAVjn9M.js";import"./hoisted.xI0VDRZf.js";const s=`<p>Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.</p>
<h2 id="headings">Headings</h2>
<p>The following HTML <code>&#x3C;h1></code>—<code>&#x3C;h6></code> elements represent six levels of section headings. <code>&#x3C;h1></code> is the highest section level while <code>&#x3C;h6></code> is the lowest.</p>
<h1 id="h1">H1</h1>
<h2 id="h2">H2</h2>
<h3 id="h3">H3</h3>
<h4 id="h4">H4</h4>
<h5 id="h5">H5</h5>
<h6 id="h6">H6</h6>
<h2 id="paragraph">Paragraph</h2>
<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>
<p>Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.</p>
<h2 id="images">Images</h2>
<h3 id="syntax">Syntax</h3>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E1E4E8">![</span><span style="color:#DBEDFF;text-decoration:underline">Alt text</span><span style="color:#E1E4E8">](</span><span style="color:#E1E4E8;text-decoration:underline">./full/or/relative/path/of/image</span><span style="color:#E1E4E8">)</span></span>
<span class="line"></span></code></pre>
<h3 id="output">Output</h3>
<p><img src="/blog-placeholder-about.jpg" alt="blog placeholder"></p>
<h2 id="blockquotes">Blockquotes</h2>
<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>
<h3 id="blockquote-without-attribution">Blockquote without attribution</h3>
<h4 id="syntax-1">Syntax</h4>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#85E89D">> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  </span></span>
<span class="line"><span style="color:#85E89D">> </span><span style="color:#E1E4E8;font-weight:bold">**Note**</span><span style="color:#85E89D"> that you can use </span><span style="color:#E1E4E8;font-style:italic">_Markdown syntax_</span><span style="color:#85E89D"> within a blockquote.</span></span>
<span class="line"></span></code></pre>
<h4 id="output-1">Output</h4>
<blockquote>
<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.<br>
<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>
</blockquote>
<h3 id="blockquote-with-attribution">Blockquote with attribution</h3>
<h4 id="syntax-2">Syntax</h4>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#85E89D">> Don't communicate by sharing memory, share memory by communicating.&#x3C;br></span></span>
<span class="line"><span style="color:#85E89D">> — &#x3C;cite>Rob Pike[</span><span style="color:#DBEDFF;text-decoration:underline">^1</span><span style="color:#85E89D">]&#x3C;/cite></span></span>
<span class="line"></span></code></pre>
<h4 id="output-2">Output</h4>
<blockquote>
<p>Don’t communicate by sharing memory, share memory by communicating.<br>
— <cite>Rob Pike<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup></cite></p>
</blockquote>
<h2 id="tables">Tables</h2>
<h3 id="syntax-3">Syntax</h3>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E1E4E8">| Italics   | Bold     | Code   |</span></span>
<span class="line"><span style="color:#E1E4E8">| --------- | -------- | ------ |</span></span>
<span class="line"><span style="color:#E1E4E8">| </span><span style="color:#E1E4E8;font-style:italic">_italics_</span><span style="color:#E1E4E8"> | </span><span style="color:#E1E4E8;font-weight:bold">**bold**</span><span style="color:#E1E4E8"> | </span><span style="color:#79B8FF">\`code\`</span><span style="color:#E1E4E8"> |</span></span>
<span class="line"></span></code></pre>
<h3 id="output-3">Output</h3>















<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>
<h2 id="code-blocks">Code Blocks</h2>
<h3 id="syntax-4">Syntax</h3>
<p>we can use 3 backticks \`\`\` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E1E4E8">\`\`\`html</span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;!</span><span style="color:#85E89D">doctype</span><span style="color:#B392F0"> html</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">html</span><span style="color:#B392F0"> lang</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"en"</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;</span><span style="color:#85E89D">head</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">meta</span><span style="color:#B392F0"> charset</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"utf-8"</span><span style="color:#E1E4E8"> /></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">title</span><span style="color:#E1E4E8">>Example HTML5 Document&#x3C;/</span><span style="color:#85E89D">title</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;/</span><span style="color:#85E89D">head</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;</span><span style="color:#85E89D">body</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">>Test&#x3C;/</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;/</span><span style="color:#85E89D">body</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">\`\`\`</span></span>
<span class="line"></span></code></pre>
<h3 id="output-4">Output</h3>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="html"><code><span class="line"><span style="color:#E1E4E8">&#x3C;!</span><span style="color:#85E89D">doctype</span><span style="color:#B392F0"> html</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">html</span><span style="color:#B392F0"> lang</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"en"</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;</span><span style="color:#85E89D">head</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">meta</span><span style="color:#B392F0"> charset</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"utf-8"</span><span style="color:#E1E4E8"> /></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">title</span><span style="color:#E1E4E8">>Example HTML5 Document&#x3C;/</span><span style="color:#85E89D">title</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;/</span><span style="color:#85E89D">head</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;</span><span style="color:#85E89D">body</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">>Test&#x3C;/</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;/</span><span style="color:#85E89D">body</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">html</span><span style="color:#E1E4E8">></span></span>
<span class="line"></span></code></pre>
<h2 id="list-types">List Types</h2>
<h3 id="ordered-list">Ordered List</h3>
<h4 id="syntax-5">Syntax</h4>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#FFAB70">1.</span><span style="color:#E1E4E8"> First item</span></span>
<span class="line"><span style="color:#FFAB70">2.</span><span style="color:#E1E4E8"> Second item</span></span>
<span class="line"><span style="color:#FFAB70">3.</span><span style="color:#E1E4E8"> Third item</span></span>
<span class="line"></span></code></pre>
<h4 id="output-5">Output</h4>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<h3 id="unordered-list">Unordered List</h3>
<h4 id="syntax-6">Syntax</h4>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#FFAB70">-</span><span style="color:#E1E4E8"> List item</span></span>
<span class="line"><span style="color:#FFAB70">-</span><span style="color:#E1E4E8"> Another item</span></span>
<span class="line"><span style="color:#FFAB70">-</span><span style="color:#E1E4E8"> And another item</span></span>
<span class="line"></span></code></pre>
<h4 id="output-6">Output</h4>
<ul>
<li>List item</li>
<li>Another item</li>
<li>And another item</li>
</ul>
<h3 id="nested-list">Nested list</h3>
<h4 id="syntax-7">Syntax</h4>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#FFAB70">-</span><span style="color:#E1E4E8"> Fruit</span></span>
<span class="line"><span style="color:#FFAB70">  -</span><span style="color:#E1E4E8"> Apple</span></span>
<span class="line"><span style="color:#FFAB70">  -</span><span style="color:#E1E4E8"> Orange</span></span>
<span class="line"><span style="color:#FFAB70">  -</span><span style="color:#E1E4E8"> Banana</span></span>
<span class="line"><span style="color:#FFAB70">-</span><span style="color:#E1E4E8"> Dairy</span></span>
<span class="line"><span style="color:#FFAB70">  -</span><span style="color:#E1E4E8"> Milk</span></span>
<span class="line"><span style="color:#FFAB70">  -</span><span style="color:#E1E4E8"> Cheese</span></span>
<span class="line"></span></code></pre>
<h4 id="output-7">Output</h4>
<ul>
<li>Fruit
<ul>
<li>Apple</li>
<li>Orange</li>
<li>Banana</li>
</ul>
</li>
<li>Dairy
<ul>
<li>Milk</li>
<li>Cheese</li>
</ul>
</li>
</ul>
<h2 id="other-elements--abbr-sub-sup-kbd-mark">Other Elements — abbr, sub, sup, kbd, mark</h2>
<h3 id="syntax-8">Syntax</h3>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E1E4E8">&#x3C;abbr title="Graphics Interchange Format">GIF&#x3C;/abbr> is a bitmap image format.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">H&#x3C;sub>2&#x3C;/sub>O</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">X&#x3C;sup>n&#x3C;/sup> + Y&#x3C;sup>n&#x3C;/sup> = Z&#x3C;sup>n&#x3C;/sup></span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">Press &#x3C;kbd>CTRL&#x3C;/kbd> + &#x3C;kbd>ALT&#x3C;/kbd> + &#x3C;kbd>Delete&#x3C;/kbd> to end the session.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">Most &#x3C;mark>salamanders&#x3C;/mark> are nocturnal, and hunt for insects, worms, and other small creatures.</span></span>
<span class="line"></span></code></pre>
<h3 id="output-8">Output</h3>
<p><abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.</p>
<p>H<sub>2</sub>O</p>
<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>
<p>Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.</p>
<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>The above quote is excerpted from Rob Pike’s <a href="https://www.youtube.com/watch?v=PAAkCSZUG1c">talk</a> during Gopherfest, November 18, 2015. <a href="#user-content-fnref-1" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,l={title:"Markdown Style Guide",description:"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.",pubDate:"Jun 19 2024",heroImage:"/image_gallery/blog-placeholder-1.jpg"},p="C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (7).md",r=void 0;function E(){return`
Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML \`<h1>\`—\`<h6>\` elements represent six levels of section headings. \`<h1>\` is the highest section level while \`<h6>\` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

### Syntax

\`\`\`markdown
![Alt text](./full/or/relative/path/of/image)
\`\`\`

### Output

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

\`\`\`markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
\`\`\`

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

\`\`\`markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
\`\`\`

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

### Syntax

\`\`\`markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | \`code\` |
\`\`\`

### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | \`code\` |

## Code Blocks

### Syntax

we can use 3 backticks \`\`\` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

\`\`\`\`markdown
\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
\`\`\`
\`\`\`\`

### Output

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
\`\`\`

## List Types

### Ordered List

#### Syntax

\`\`\`markdown
1. First item
2. Second item
3. Third item
\`\`\`

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

\`\`\`markdown
- List item
- Another item
- And another item
\`\`\`

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

\`\`\`markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
\`\`\`

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

\`\`\`markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
\`\`\`

### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
`}function y(){return s}function b(){return[{depth:2,slug:"headings",text:"Headings"},{depth:1,slug:"h1",text:"H1"},{depth:2,slug:"h2",text:"H2"},{depth:3,slug:"h3",text:"H3"},{depth:4,slug:"h4",text:"H4"},{depth:5,slug:"h5",text:"H5"},{depth:6,slug:"h6",text:"H6"},{depth:2,slug:"paragraph",text:"Paragraph"},{depth:2,slug:"images",text:"Images"},{depth:3,slug:"syntax",text:"Syntax"},{depth:3,slug:"output",text:"Output"},{depth:2,slug:"blockquotes",text:"Blockquotes"},{depth:3,slug:"blockquote-without-attribution",text:"Blockquote without attribution"},{depth:4,slug:"syntax-1",text:"Syntax"},{depth:4,slug:"output-1",text:"Output"},{depth:3,slug:"blockquote-with-attribution",text:"Blockquote with attribution"},{depth:4,slug:"syntax-2",text:"Syntax"},{depth:4,slug:"output-2",text:"Output"},{depth:2,slug:"tables",text:"Tables"},{depth:3,slug:"syntax-3",text:"Syntax"},{depth:3,slug:"output-3",text:"Output"},{depth:2,slug:"code-blocks",text:"Code Blocks"},{depth:3,slug:"syntax-4",text:"Syntax"},{depth:3,slug:"output-4",text:"Output"},{depth:2,slug:"list-types",text:"List Types"},{depth:3,slug:"ordered-list",text:"Ordered List"},{depth:4,slug:"syntax-5",text:"Syntax"},{depth:4,slug:"output-5",text:"Output"},{depth:3,slug:"unordered-list",text:"Unordered List"},{depth:4,slug:"syntax-6",text:"Syntax"},{depth:4,slug:"output-6",text:"Output"},{depth:3,slug:"nested-list",text:"Nested list"},{depth:4,slug:"syntax-7",text:"Syntax"},{depth:4,slug:"output-7",text:"Output"},{depth:2,slug:"other-elements--abbr-sub-sup-kbd-mark",text:"Other Elements — abbr, sub, sup, kbd, mark"},{depth:3,slug:"syntax-8",text:"Syntax"},{depth:3,slug:"output-8",text:"Output"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const x=e((i,c,u)=>{const{layout:d,...n}=l;return n.file=p,n.url=r,a`${t()}${o(s)}`});export{x as Content,y as compiledContent,x as default,p as file,l as frontmatter,b as getHeadings,E as rawContent,r as url};
