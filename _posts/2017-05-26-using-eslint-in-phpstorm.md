---
layout: post
title: "Using ESLint in PhpStorm"
categories: journal
---

ESLint is a linting utility for JavaScript which PhpStorm 2017.1 now supports.

I have been using the [gulp ESLint plugin](https://www.npmjs.com/package/gulp-eslint)
for a while now and run it before each deployment. This helps enforce code consistency
and allows for easier on-boarding of new developers.

Having read an article on CSS-Tricks about [enforcing CSS syntax and style](https://css-tricks.com/enforcing-css-syntax-style),
I had a look to see what [PhpStorm](https://www.jetbrains.com/help/phpstorm/2017.1/eslint.html) supports.
To my surprise, they have built-in support for [ESLint](http://eslint.org).
This is great as it allows you to spot any syntax errors during development. In
the past this would only happen if you remembered to run the gulp task or before
a deployment.

<figure>
    <img src="/assets/images/journal/phpstorm-2017-javascript-eslint-820x520.png" alt="">
    <figcaption>PhpStorm settings for ESLint</figcaption>
</figure>

Now that ESLint runs whenever you edit JavaScript, you can see errors immediately.
It is a much less frustrating workflow and forces you into good coding habits.
The gulp task still runs ESLint before deployment, in case you use an editor other
than PhpStorm.

<figure>
    <img src="/assets/images/journal/eslint-error-820x267.png" alt="">
    <figcaption>ESLint warning of a syntax error</figcaption>
</figure>

This is yet another reason why PhpStorm is my favourite IDE!

---

Be sure to check out these examples of JavaScript style guides for ESLint:

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://github.com/google/eslint-config-google)
- [JavaScript Standard Style](https://github.com/feross/eslint-config-standard)
