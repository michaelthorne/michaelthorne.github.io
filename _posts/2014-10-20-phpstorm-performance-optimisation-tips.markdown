---
layout: post
title: "PhpStorm performance optimisation tips"
date: 2014-10-20
categories: journal
---

My first experience of JetBrains products was back in 2006 with IntelliJ when I was doing Java development. Over the last
few years I’ve been happily using PhpStorm, but I’m always keen to optimise it’s performance wherever possible.

My work computer is a pretty neat [Samsung](http://www.samsung.com/africa_en/consumer/pc-peripherals-printer/notebook-pc/laptops/NP730U3E-K01ZA)
laptop with an Intel i5 processor, 4GB of DDR3 memory and a 128GB solid-state drive. The SSD has made the noticeable performance
improvement over previous computers I’ve worked on.

However, with the latest version of PhpStorm (8.0.1 at the time of writing this), I’ve noticed that it feels quite sluggish
when working with relatively large projects. I primarily only PhpStorm for front-end web development, consisting of HTML,
CSS (Less), JavaScript and Mustache templates. So I could really be using WebStorm, but I previously did a lot of PHP development
and I still like to occasionally view PHP source code in the projects that I’m involved with.

After doing some research, I found two tips which were applicable to my environment which includes Windows 8, as well as
using TortoiseGit and Grunt with numerous plugins. Here are the tips:

* Exclude the **node_modules** directory with a project in PhpStorm. Due to the large number of files in this folder
(over 5,000 in one of my projects), these are all accessible and appear in search results whenever you use the built in
search or navigation functionality. For example: when you navigate to a file <kbd>CTRL + SHIFT + N</kbd> or find/replace
in path <kbd>CTRL + SHIFT + F/R</kbd>. So to prevent all those files from being accessible in your project, right click
on the **node_modules** folder within the Project window and select “Mark Directory As…” and then choose “Excluded”.
* Disable icon overlays by TortoiseGit in your operating system. Within TortoiseGit, browse to Settings → Icon Overlays →
Status cache: “None”.

Thanks to the answer provided on [Stack Overflow](http://stackoverflow.com/questions/18514438/ignore-node-modules-in-webstorm-when-using-navigation-pop-up)
and to the article on [Frickelblog](http://www.locked.de/2014/06/09/intellij-idea-and-scala-being-awfully-slow-on-windows-8-1)
respectively for the tips.

The “responsiveness” of PhpStorm on my laptop has definitely increased with these changes that I made. Finding and navigating
to files feels instant again, which is something that I sorely missed after upgrading to version 8. I’m not sure if it’s
related to something in my environment, or if it is part of a change in version 8 of PhpStorm, but there was definitely
a noticeable decrease in the overall performance on my laptop.

As always, it is great when developers share their findings and are able to help out people in need. Keep it up!