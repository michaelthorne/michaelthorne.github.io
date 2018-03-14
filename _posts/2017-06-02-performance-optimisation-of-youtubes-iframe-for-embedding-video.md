---
layout: post
title: "Performance optimisation of YouTube’s iframe for embedding video"
categories: journal
---

I created this case study to show how you can optimise the performance of embedded video on your website.

### Always be testing

I recently completed an upgrade (complete overhaul) of the front-end of a
website. While testing it’s performance, the page load time and download size
alarmed me. The website had an embedded YouTube video in the hero on the landing
page (as they so often do). I had used the default code that YouTube provides
for embedding a video with an inline <code>&lt;iframe&gt;</code>. Looking at the
requested files, it was clear to see how these 3rd party scripts had a negative
impact.

These are the services I use for performance testing:

- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights)
- [Pingdom Website Speed Test](https://tools.pingdom.com)
- [WebPagetest](http://www.webpagetest.org)

My initial thought was to display a placeholder image with an external link to
the video on YouTube. But the ability to watch the video inline on the website
is likely to be a better user experience. The website used to load the video in
a modal (ugh, more bloat). This got me thinking: include the
<code>&lt;iframe&gt;</code> when the user wants to play the video.

### Measuring performance

After a little bit of digging around online, I came across the solution on
[SitePoint](https://www.sitepoint.com/faster-youtube-embeds-javascript). Other
examples are available on [Tuts+](https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743)
and [Labnol](https://www.labnol.org/internet/light-youtube-embeds/27941).

Needless to say, it was not the first time someone had thought of
this. Why I felt compelled to reproduce it, instead of copying it and moving on,
was the desire to measure the change.

It is also easier to quantify the differences by eliminating all other factors.
So I set out to create a [case study](http://code.userx.co.za/iframes),
detailing the different methods for embedding a YouTube video.

#### 1. The inline <code>&lt;iframe&gt;</code>

The [first method](http://code.userx.co.za/iframes/embed-iframe-default.html)
embeds the video with an inline <code>&lt;iframe&gt;</code>. YouTube provides
this code for you and makes embedding videos a simple affair. As mentioned, the
downside to this is that you force the download of all the necessary scripts on
page load.

#### 2. Using JavaScript

In the [second method](http://code.userx.co.za/iframes/embed-iframe-javascript.html),
JavaScript inserts an <code>&lt;iframe&gt;</code> into the page when you click
to play the video. A few lines of CSS provide styling to create a play “button”
via a pseudo element. YouTube allows you to access a cover image for any video
and the figure element uses this image.

After clicking play, the <code>&lt;iframe&gt;</code> gets inserted and replaces
the figure. Only then are the 3rd party scripts that YouTube requires,
downloaded.

### The results

In these two basic examples, the load time for the JavaScript method is under 1
second. It downloads about 60 KB for a full page load. In comparison, the inline
<code>&lt;iframe&gt;</code> almost takes 3 seconds and over half a megabyte to
download.

Another major benefit is that using JavaScript results in 10 **fewer** network
requests!

The code is all available on [GitHub](https://github.com/michaelthorne/iframes).

### Disclaimer

Could my code be better? I have *no* doubt. But it does a good job of
illustrating an alternative way of dealing with an inline
<code>&lt;iframe&gt;</code>.

---

#### Further reading

- Designing for Performance: [Performance is User Experience](http://designingforperformance.com/performance-is-ux)
- SOASTA: [Google: 53% of mobile users abandon sites that take longer than 3 seconds to load](https://www.soasta.com/blog/google-mobile-web-performance-study)
- Google Developers: [Web Performance Fundamentals](https://developers.google.com/web/fundamentals/performance)
