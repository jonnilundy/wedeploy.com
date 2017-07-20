---
title: "Add Config File"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I added the wedeploy.json"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 40
weight: 5
---

#### Add wedeploy.json

It is not mandatory to include a `wedeploy.json` in this project because we will automatically detect that you are trying to deploy static files, but just so you can see what the inside of a `wedeploy.json` is, let's add one.

1. Open the `tutorial-hosting` folder in a code editor
2. Create a new file named `wedeploy.json`
3. In that file, paste this code:

```application/json
{
	"id": "hosting",
	"image": "wedeploy/hosting:beta"
}
```

The `id` is completely customizable by you.

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do in your `wedeploy.json` file is add environment variables. There are many ways to use these; one example is to serve files in a different folder.

```application/json
{
	"id": "hosting",
	"image": "wedeploy/hosting:beta",
	"env": {
		"WEDEPLOY_WEB_PATH": "/dist/"
	}
}
```

See the full list of <a href="http://wedeploy.com/docs/hosting/environment-variables.html" target="_blank">Environment Variables for Hosting</a>.

</aside>
