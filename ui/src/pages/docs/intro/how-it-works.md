---
title: "How It Works"
description: "Deployment platforms can be kind of confusing. Let's simplify it for you!"
headerTitle: "Intro"
layout: "guide"
weight: 3
---

# {$page.title}

###### {$page.description}

<article id="1">

## How it works

The last thing any developer wants is to add a new tool that forces them to alter their work flow. This is why we've worked hard to build WeDeploy in a way that can fit right into your flow and fill the gaps needed to take your development to the next level. You can start hosting your static files, buildling a database, or even sending emails within a few minutes! 

When you push your local project to your WeDeploy project (don't worry, we will go over how to do that bellow), we scan your project for directories that contain `container.json` files. When we find one of these `container.json` files, we serve that whole directory as a part of the service you specified.

Let's say you have a project called `myApp` that uses the Hosting, Data, and Email WeDeploy services, this could be a file structure for that project.

```
myApp
├── data
│   ├── api.json
│   └── container.json
├── email
│   └── container.json
└── hosting
│   ├── container.json
│   └── index.html
└── project.json
```

These `container.json` files specify the unique ID of your service (`id`) and the type of image you want to deploy (`type`). 

```app/json
{
	"id": "ui",
	"type": "wedeploy/hosting:latest"
}
```

<aside>

To learn more about how these JSON files work and what parameters you can use, read through our documentation on [configuration files](/docs/intro/configuration-files.html).

</aside>

</article>

## What's next?

* Now we're ready to start [deploying](/docs/intro/deploying.html).
