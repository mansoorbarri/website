---
title: "Use npm with Hugo"
description: "A biref guide on how to use NPM with Hugo to create website on the fly."
date: "2024-06-12"
url: "/npm-hugo/"
draft: false
categories:
  - Linux
  - Windows
tags:
  - Hugo
  - npm
---

I was developing a new Hugo theme and wanted to use Tailwind, and if you did not know, Tailwind is installed in a project using Nodejs. More specifically, [npm](https://www.npmjs.com/) however I did not know how do I use Hugo with npm and deploy it to Cloudflare. kinda dumb. 

Turns out, its quite easy. 

## Steps
Initialise npm to your project, or in this case, install Tailwind. 

- from your Hugo project root, Install Tailwind: 
- set your Tailwind config

Now you will have to set scripts so you can run Hugo using node. It sounds complicated but its not. 

- install `npm-run-all` by running: 
```
npm i -D npm-run-all
```

- Set scripts in `package.json`: 
```
{
  "scripts": {
    "dev-hugo": "hugo server --disableFastRender",
    "dev-tailwind": "npx tailwindcss -i assets/css/raw.main.css -o static/css/main.css --watch",
    "dev": "run-p dev-hugo dev-tailwind",
    "build": "npx tailwindcss -i assets/css/raw.main.css -o static/css/main.css && hugo "
  },
  "devDependencies": {
    "npm-run-all": "^4.1.5",
    "tailwindcss": "^3.3.3"
  }
}
```

So what I did here is that I made a script called `dev-hugo` which runs hugo server then I made another script called `dev-tailwind` which runs Tailwind then I combine both *"dev-"* scripts so both can run simultanously; which is also why we need the `npm-run-all` package. 

The combined script is called `dev` however you can change the name of script to whatever you want. Also, I made another script to actually build my Hugo site along with the Tailwind CSS. 

In summary, I have two main scripts which I will be using: `dev` & `build`. Now to run Hugo locally, run: `npm run dev` & to build the website i.e., on Cloudflare, run: `npm run build` and it should all work. 

I still don't understand some part of this but hey, it works. Here is the project which uses npm + Hugo + Tailwind + Cloudflare: https://github.com/mansoorbarri/Davlux 

![a man throwing his computer in a trash bin](https://media0.giphy.com/media/n9ewEcw0oyHEYEuH1c/giphy.gif?cid=6c09b952c006y487vdha53s91oql9chudnh5vqeoafochdus&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g)

-MB 

