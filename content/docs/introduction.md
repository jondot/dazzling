---
title: Getting Started
doc: 1
section: 1
category: "tech"
type: "doc"
---

Dazzling is the quickest and most flexible way to build websites for your projects. It requires minimal set up and preparations, and is backed by a powerful [generator framework](http://www.hygen.io). 

Let's see what it takes to build your new website.

You can use Dazzling in a new or existing project; as long as you have a target folder with a `package.json` in it, your all set.

```
$ yarn add -D dazzling
$ yarn dazzling site new
```

After running the `dazzling site` command it will prompt you with quick questions. You can keep the defaults or input your own answers - you can always edit later.

```
$ dazzling site new
? What's your project name? Bamboo
? Project tagline? The scalable wood that bends and holds strong.
? Github repo? https://github.com/fixme/fixme
? Website? https://fixme.io
? Google Analytics ID? UA-FIX-ME-XXXXX
? Your name? (for copyright) Chuck Woody

Loaded templates: dazzling/_templates
       shell: cd 'dazzling/_templates/site/new/contents' && tar cf - --exclude=node_modules . | (cd daz-test && tar xvf - )
       added: daz-test/www/static/CNAME
       added: daz-test/www/site-config.js
```

You're now ready to `cd www` and `yarn install`:

```
$ cd www
$ yarn install
$ yarn start
```

In a moment you'll have a new website ready, including documentation, with [Gatsby](https://github.com/gatsbyjs/gatsby) as the backing engine.

Next, let's see how to [configure your website](configuration).

