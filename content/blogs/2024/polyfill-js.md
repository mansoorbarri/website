---
title: "What we can learn from the polyfill.js attack" 
description: "Learn from the Polyfill.js attack, where compromised code injected malware into popular websites && what we can learn from this attack" 
date: "2024-06-29"
url: "/polyfill-js/"
draft: false
categories:
  - webdev
tags:
  - Polyfill
  - JavaScript
  - cybersecurity
---

Polyfill.js, once a trusted library for older browsers, has been compromised, injecting malware through cdn.polyfill.io. For those who don't know, Polyfill.js was a library that provided polyfills for older browsers, and it was used by many popular websites. However, it was compromised and the malicious code was injected through cdn.polyfill.io. 

This was done by company being bought by a Chinese company, and the malicious code was injected through cdn.polyfill.io. You can read more about the attack by the original researcher [here](https://sansec.io/research/polyfill-supply-chain-attack).

Vigilance with Third-Party Libraries
We should be careful when using third-party libraries, especially those not maintained by the original developer. This incident underscores the importance of vetting the sources of our dependencies and regularly reviewing their integrity.

## Open Source Software Risks
Using open source libraries and software comes with its own set of risks. While open source software offers many benefits, including transparency and community support, it also can be targeted for attacks, especially if widely adopted.

## Historical Context
A while ago, something similar happened with the popular library, XZ. That attack was the result of a sophisticated social engineering effort, demonstrating that the methods of compromising software can vary but the impact can be equally devastating.

## Recommended Actions
- **Regular Audits:**Conduct regular audits of third-party libraries and dependencies. 
- **Alternative Solutions**: Consider using alternatives from trusted providers. For instance, both Fastly and Cloudflare have provided trustworthy replacements for Polyfill.
- **Monitoring Tools:** Implement tools like Content Security Policy (CSP) monitoring to detect unauthorized changes to scripts.
- **Stay Informed:** Keep up-to-date with security news and reports related to the libraries and frameworks you use.

## Conclusion
Its important that we revisit how we use third-party libraries and software, and take proactive measures to ensure that we are using trusted providers. These type of attacks quite hard to detect, and when we do find them, its usually too late to prevent them. And its certainly hard to prevent because who owns what the parent company will do once they buy a software. 


-MB 

