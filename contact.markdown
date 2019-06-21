---
title: Contact
date: 2018-10-28 17:00:00 Z
layout: static
---

<img src="/uploads/IMG_1544-568f23.jpg">

<p>I am open to commissions and selling some of the artwork on my site. Please contact me for more information.</p>
<!-- <h3 id="contact-me">Contact me</h3> -->
<form name="contact" method="POST" action="/success" netlify netlify-honeypot="bot-field">
  	<input type="text" name="name" placeholder="Name" />
	<input type="email" name="email" placeholder="Email" />
	<textarea name="message" placeholder="Message"></textarea>
	<div data-netlify-recaptcha="true"></div>
	<div class="honeypot"><input name="bot-field" /></div>
    <button type="submit"><span class="text-link send-button">Send</span></button>
</form>