---
title: "Getting Started"
description: "Deploying is very easy with WeDeploy. You can start hosting your static files, buildling a database, or even sending an email within a couple of minutes!"
headerTitle: "Intro"
layout: "guide"
weight: 9
---

# {$page.title}

###### {$page.description}

<article id="1">

## Local file structure

When you push your local project to your WeDeploy project (Learn how to start deploying [**here**](docs/intro/deploying.html)), we scan your project for `container.json` files, which specify what kind of services you are using. When we find one, we serve that whole directory as a part of the service you defined in the `container.json`. 

If you had a project called `my-project` that used the Hosting, Data, and Email services, then this could be a file structure for that project:

```sh
my-project
├── data
│   ├── api.json
│   └── container.json
├── email
│   └── container.json
└── hosting
    ├── container.json
    ├── index.html
    ├── index.js
    └── main.css
```
</article>

<article id="2">

## Container.json

Every `container.json` needs to have an `id` which tells WeDeploy what your service name is, and a `type` which tells WeDeploy which service to use (Auth, Data, Email, Hosting, Liferay, Java, Ruby, or Node.js). For example, in your hosting folder, the `container.json` could be:

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting"
}
```

* The `id` can be changed to whatever best describes that service in project.

</article>

## What's next?

* Now that you know the basics about how WeDeploy works, start [deploying your first project](/docs/intro/deploying.html)!
