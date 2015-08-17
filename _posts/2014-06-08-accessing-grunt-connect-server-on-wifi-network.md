---
layout: post
title: "Accessing a Grunt connect server on your WiFi network"
categories: journal
---

Before I get started, if you’ve heard of Grunt but haven’t tried it out, I’m not going to be able to do it the justice it
deserves. I do recommend Chris Coyier’s excellent tutorial on 24 ways: “[Grunt for People Who Think Things Like Grunt are Weird and Hard](http://www.24ways.org/2013/grunt-is-not-weird-and-hard)”.

*Disclaimer: I’m not going to entertain a “Grunt vs Gulp” argument here. This is specifically for those of you, like myself,
currently using Grunt for automating web development tasks. And I work on a Windows PC and laptop, so no OS wars, please.
The principles, however, are the same.*

I’ve been using Grunt for a while now and battle to think back to the days before it was part of my workflow. In my current
“[HTML5 Boilerplate](https://github.com/michaelthorne/boilerplate)” project, I have, amongst others, a configuration for
the [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) plugin. As per it’s description on GitHub,
it allows you to “start a static web server”. This allows me to access my static HTML templates via a web server on my computer
whenever I run the plugin.

Until now, I haven’t found a way to easily view my front-end HTML templates on my phone or iPad, without uploading them
to a live (staging) server. This extra step of uploading is not only repetitive and time-consuming, but it also means you’re
using unnecessary bandwidth which is an issue when working remotely (on a mobile connection) as well with needing to bust
cache every time you upload.

So this process essentially requires two steps:

* Configure Windows Firewall on your local machine
* Configure Grunt Connect to allow access on your network

After a little bit of Googling, I managed to find an article which explains the necessary configuration steps you need to
make to Windows Firewall in order to [access localhost over WiFi](http://www.mobitechie.com/android-2/how-to-access-localhost-on-android-over-wifi).

Essentially, all I did was add a new rule for port **1337** which is the port I use for Grunt Connect. The default is
**8000** and this will still work, as long as you configure your firewall accordingly.

Then I modified the **hostname** option to be `*`. According to the documentation, it does the following: “Setting it to
`*` will make the server accessible from anywhere.”

Lastly, I set the **open** option to an object with the key **target** and a value of `127.0.0.1:1337` (replace 1337 with
8000 if you’re using the default in Grunt Connect).

The reason for setting the **open** option in the configuration is to override the default IP address of `0.0.0.0` which
is what gets used as the URL that Grunt Connect opens up in your browser when the server starts. `127.0.0.1` should always
be accessible on your local machine by default, where as `0.0.0.0` requires additional configuration outside the realm of
this guide.

You should now be able to run your Grunt Connect server, it’ll open your web browser to `127.0.0.1:1337|8000` depending
on which port you’ve used.

All you need to do now, is get the IP address of the machine running your Grunt Connect server. That requires you to run
the **ipconfig** command from your Command Prompt and then look for the IP address next to **IPv4 Address** e.g. `192.168.0.1`

Type that IP address into any mobile device connected to your WiFi network, followed by the port you’ve configured for Grunt
Connect e.g. `192.168.0.1:1337` You should now be able to view the static web server on your phone, tablet or any other
computer on the network.

The full configuration for the **grunt-contrib-connect** plugin in my **Gruntfile.js** looks like this:

{% highlight javascript %}
connect: {
    server: {
        options: {
            hostname: '*',
            livereload: true,
            open: {
                target: 'http://127.0.0.1:1337'
            },
            port: 1337,
            useAvailablePort: true
        }
    }
}
{% endhighlight %}

In summary:

* Make sure your firewall can access the port that you configure Grunt Connect to use (8000 by default)
* Configure Grunt Connect to open <code>127.0.0.1:8000</code> as it’s target when the server starts up

I hope this can be of use to you. It’s certainly made my workflow a lot easier!

_**Update**: I’ve just realised that the `livereload: true` option also forces a reload on all connected devices. No more
having to press refresh on your mobile phone or tablet._
