---
layout: post
title: "Generating my static site with Jekyll and GitHub Pages"
categories: journal
---

I recently converted my website to use Jekyll and GitHub Pages. Jekyll allows you to generate static websites from templates
and Markdown files.

<figure>
    <a href="http://jekyllrb.com/">
        <img srcset="/assets/images/journal/jekyll-logo-820x418.png 820w,
                     /assets/images/journal/jekyll-logo-410x209.png 410w"
            sizes="100vw"
            src="/assets/images/journal/jekyll-logo-820x418.png"
            alt="Jekyll logo">
    </a>
    <figcaption>Jekyll is a simple, blog-aware, static site generator.</figcaption>
</figure>

### Markdown

In the past, adding content to my website required a lot of copying and pasting. Now that I’m using Jekyll, the end result
is the same in that it is still static HTML. But adding a post to my journal is as easy as creating a Markdown file with
my new content.

Until recently, I wasn’t aware that Markdown supports [inline HTML tags](http://daringfireball.net/projects/markdown/syntax#html).
This was one of the reasons I was reluctant to use Jekyll in the past. For example, Markdown doesn’t support the `<cite>`
element for block quotes. I often make use of quotes in my writing, so it is important that I can still do this. Jekyll
and Markdown gives me full control over the markup used to generate pages.

It was a tedious converting all my pages to Markdown (even though I don’t have many). So I’m glad that’s over with.

### GitHub Pages

Seeing as my the source [code for my website](https://github.com/michaelthorne/michaelthorne.github.io) is on GitHub, it
seemed logical to try out [GitHub Pages](https://pages.github.com).

<blockquote>
    <p>GitHub Pages are public webpages hosted and published through our site.</p>
    <cite>— <a href="https://help.github.com/articles/what-are-github-pages">GitHub</a></cite>
</blockquote>

After creating a `gh-pages` branch, I imported a boilerplate Jekyll site into my repository and began customising it. Now
I can push code to my repository and the changes are live within seconds.

GitHub Pages also supports custom domain names and Jekyll. The support for Jekyll was a bonus, as it means I don’t need to
generate my static site and upload it. GitHub Pages generates my site for me whenever I push new changes.

### Generating a sitemap in Jekyll

GitHub Pages run Jekyll in safe mode, which means you can’t use custom plugins. And I needed an automated solution for generating
my sitemap. David Ensinger has written about [generating a sitemap in Jekyll without a plugin](http://davidensinger.com/2013/03/generating-a-sitemap-in-jekyll-without-a-plugin).

I am using his updated method on my website which works great.

### Compressing HTML in Jekyll

I use the Grunt `htmlmin` plugin for [minifying HTML](https://www.npmjs.com/package/grunt-contrib-htmlmin) in most of my
projects. The performance benefit of minified HTML is that it reduces the document’s file size. White space gets removed
from the HTML and this can lower the time it takes to download a web page. I haven’t had much time to research how to use
Jekyll and Grunt, but I still wanted to minify my HTML.

Anatol Broder has created a clever Jekyll layout that [compresses HTML
in Liquid](http://jch.penibelst.de). The nice thing about this solution, is that a custom plugin isn’t required either.

---

I also took this opportunity to make some cosmetic updates to my website. Whilst the changes aren’t earth-shattering, I’m
happy with the progress I’ve made. And now I can post to my journal more often.
