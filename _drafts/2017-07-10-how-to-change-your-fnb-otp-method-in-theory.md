---
layout: post
title: "How to change your FNB OTP method (in theory)"
categories: journal
---

Log into FNB’s online banking and then browse to: Online Banking Settings →
Security → OTP → and select “Change”. That is the theory anyway, unfortunately
it does not work as intended.

**TL;DR**: there is actually no way to do this, but feel free to continue reading to
see the effort I went through to try and change mine.

### Let’s get started

I’m travelling overseas in a few weeks time and might not have access to SMS.
Having change OTP methods in the past, I thought it’d be a simple process to
change it to email while I’m away.

I logged into my online banking profile, navigated to the section for OTP and
then came to a dead end.

<figure>
    <img src="/assets/images/journal/fnb-otp-method-chrome-960x1050.png" alt="">
    <figcaption>OTP settings on FNB Online Banking</figcaption>
</figure>

There is no information under **Option 1** (primary, I assume) and **Option 2**
(secondary…) looked like bad news to me.

Out of frustration, I [vented on Twitter](https://twitter.com/Rbjacobs/status/882563131171536896)
(as you do). RbJacobs then kindly told me to do what I had done.

> You can change this via Online Banking to do this select “Online Banking
Settings” then “Change” next to “OTP” under “Security”.

Does the social media team not know how their own product works? Am I meant to
speak to their “techies” and troubleshoot the problem? I thought I was their
client.

This was going nowhere, fast.

### The dreaded phone call

I despise having to call a company for help and support purposes. There is such
a big disconnect between the problem you face and what they’re able to deal with
over the phone.

#### Personal verification

Anyway, a few days later I bit the bullet and called **087 575 000**. After
selecting the option to speak to someone about online banking, I needed to
verify myself:

- Enter your ID number
- *Success.*
- Enter the last 6 digits of a valid FNB card
- *You have entered an invalid card.*
- Enter the last 6 digits of a valid FNB card
- *Tries credit card. Success.*
- Enter the 4 digit PIN of the card
- *Success.*

The consultant then told me changing OTP method is for international clients
only. Guess what? That’s me (for a week)!

He then needed me to accept a request on my phone via the app. And after that,
put me through to the card verification prompts. Is all this authorisation
necessary? What happened to asking for the name of my first pet? My mother’s
maiden name? My favourite football team?

#### Browser verification

After verifying myself again, I needed to verify my browser (yes, you read that
correctly). It is worth noting, this is all happening whilst talking on my cell
phone. Having to switch between the call and FNB’s app all the time is not ideal.

This process was completely vague and took longer than needed. On the app, I had
to go to: `Settings → My Devices and Browsers` and remove the verified web
browsers. The consultant kept telling me to remove Chrome on Windows (which I
tried, but it wouldn’t delete in spite of saying it had). By this point, I
returned to my computer to see if I was still logged in there. He then suggested
I try another browser (as you do) so I switched to Microsoft Edge. After logging
in with Edge I then needed to verify it on my app.

So now I had verified a new web browser on my app, whilst chatting to the
consultant on my phone. He then asked me to log out, log back in and go to
**Online Banking Settings**. And there it was: a beautiful, golden (ok—FNB orange)
continue button under *Option 1* of OTP settings.

<figure>
    <img src="/assets/images/journal/fnb-otp-method-microsoft-edge-960x1050.png" alt="">
    <figcaption>Continue button under OTP settings in Microsoft Edge</figcaption>
</figure>

I clicked on it and could now configure my OTP method settings. I thanked the
consultant and ended the call.

### Computer says no

<div class="u-fluid-embed">
    <iframe src="https://www.youtube.com/embed/AJQ3TM-p2QI"></iframe>
</div>

To my dismay, selecting email as the primary method for receiving OTPs resulted
in an error. As soon as this happened, I remembered experiencing the same thing
in the past.

It has to do with the fact that FNB obscures the value of the setting (they
replace parts of the phone number or email address with an asterisk). So you’re
trying to set your email address to e.g. `m***@***.com` and not the actual value
i.e. `mike@fnb.com`

<figure>
    <img src="/assets/images/journal/fnb-otp-method-microsoft-edge-email-error-960x1050.png" alt="">
    <figcaption>Email address validation error under OTP settings in Microsoft Edge</figcaption>
</figure>

But because there is no way to actually enter an email address, even though I
can change my OTP method, it does not work.

### Conclusion

Unfortunately, there is nothing positive to take away from this experience. I
face increasing frustration when dealing with FNB. You either need to go into
the bank to sort out issues you face with their online platform or call them.
Social media defaults to the “please call us” approach, instead of “we’ll call
you”.

Who has the time or patience to stand in a queue at the bank to update a
setting? With the annual increase in banking fees, I’m seeing an annual decrease
in quality from FNB. Having been an FNB customer for over 11 years (checked now
to confirm), it's disappointing how things are now.

I keep hearing people mentioning [Capitec Bank](https://www.capitecbank.co.za) –
maybe now is the time to give them a go.
