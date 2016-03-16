---
layout: post
title: "Displaying key value pairs in Jekyll from YAML Front Matter"
categories: journal
---

I have just added the company handbooks to our Jekyll-powered website at Next. We used Markdown to write the content of the handbooks so that anyone in the company would be able to update them.

The blog was recently moved from Tumblr to Jekyll and Markdown has proven to be popular at Next. To get the handbooks
on our website up and running, I first created static HTML versions of them. The aim was to then have each handbook as a
Markdown file, including the table of contents for each chapter. This would allow you to not only edit existing chapters,
but to add new ones in future.

<figure>
    <a href="http://www.wearenext.co.za/readme/the-next-handbook/">
        <img srcset="/assets/images/journal/the-next-handbook-820x418.png 820w,
                     /assets/images/journal/the-next-handbook-410x209.png 410w"
            sizes="100vw"
            src="/assets/images/journal/the-next-handbook-820x418.png"
            alt="">
    </a>
    <figcaption>The Next handbook</figcaption>
</figure>

The markup for the anchors of the table of contents requires the ID of an HTML element plus a label. This data lends itself
to a [block mapping](http://www.yaml.org/spec/1.2/spec.html#id2798057) in YAML Front Matter, which is a collection of `key: value`
pairs. After a quick Google search, I found out how to achieve this in Jekyll on [Stack Overflow](http://stackoverflow.com/a/8303885)
(as is so often the case).

Below is a sample of the YAML Front Matter in one of the handbooks:

{% highlight yaml %}
chapters:
    welcome: "Welcome"
    your-first-day: "Your First Day"
{% endhighlight %}

And the code to generate the table of contents in the layout:

{% highlight html %}
<ol class="list">
    {{ "{% for chapter in page.chapters "}}%}
    <li><a href="#{{ "{{ chapter[0] "}}}}">{{ "{{ chapter[1] "}}}}</a></li>
    {{ "{% endfor "}}%}
</ol>
{% endhighlight %}

In the code sample above `chapter[0]` gets the key and `chapter[1]` the value of the pair, i.e. `#welcome` and `Welcome`.

An example of the generated HTML is as follows:

{% highlight html %}
<li><a href="#welcome">Welcome</a></li>
<li><a href="#your-first-day">Your First Day</a></li>
{% endhighlight %}

Block mapping will allow me to create more complex layouts in Jekyll using YAML Front Matter.

---

The idea behind the [Next handbooks](http://www.wearenext.co.za/readme/) is to document our culture, processes and tools.
Anyone at Next can contribute to the them and those outside get an insight in to who we are and how we work.
