---
title: "Environment Variables"
description: "This is an overview of how WeDeploy manages environment variables for your projects."
headerTitle: "Intro"
layout: "guide"
weight: 9
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

A project may have numerous environments: a production app, a staging app, and any number of test and local environments maintained by many different developers. However, the code is the same. In order to make it happen, each environment would have specific configurations.

A good example would be credentials for the database, where each environment has its own credentials. The ideal scenario for handling this scenario, would be using Environment variables, in order to set up different configurations for different environment using the same code. In a traditional development proccess, you would speciffy the 
configurations in different files. On WeDeploy you can take advantage of Environment Variables using the dashboard.

</article>

<article id="2">

## Configuring environment variables

WeDeploy can help you to configure environment variables for your services. Each service can have its own group of environment variables and can be configured follwing these steps:

**Using the Dashboard**

1) Go to the specific Service page.
2) Click on Environment.
3) Add your keys and values.
4) Click on Update Service.

![envvar](https://cloud.githubusercontent.com/assets/301291/19909475/27d9d6f0-a045-11e6-9483-54d76a164384.png)

**Using container.json**

You can also do this locally by adding the variables to your `container.json` files like this:

```application/json
{
	"id": "myapp",
	"type": "wedeploy/nodejs",
	"env": {
		"DATABASE_USER": "test",
		"DATABASE_NAME": "testdb"
	}
}
```

<aside>

###### <span class="icon-16-alert"></span> Attention

Any environment variable provided using the dashboard overwrites the environment variables in the `container.json` of your source code.

</aside>

To see the lists of available variables, go to the Environment Variables page of the individual services:

 * [**Auth Environment Variables**](/docs/auth/environment-variables.html)
 * [**Email Environment Variables**](/docs/email/environment-variables.html)
 * [**Hosting Environment Variables**](/docs/hosting/environment-variables.html) 

</article>

## What's next?

* Learn more about using [custom domains](/docs/intro/custom-domains.html).
