---
title: "Environment Variables"
description: "Use environment variables to control your app."
headerTitle: "Hosting"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<article id="1">

## Environment Variables

There are many ways to use environment variables in your app: a production app, a staging app, any number of test and local environments maintained by many different developers, or specific paths to build folders.

There are two ways to add these environment variables: local `container.json` file, the Dashboard.

##### Container.json

To add a variable to your source files, you just need to add the key and the value inside of the `container.json` file. 

```application/json
{
	"env": {
		"WEDEPLOY_WEB_PATH": "/build/"
	}
}
```

##### Dashboard

To add a variable on your dashbaord, you just need to navigate to **Dashboard** > **Services** > **Hosting** > **Environment**.

![Dashboard](https://cloud.githubusercontent.com/assets/23219848/24171535/2c7119c4-0e42-11e7-9457-a182929b23da.png)

</article>

<article id="2">

## Environment Keys

Here is a list of all the Hosting environment variable keys you can use.

| Key | Description |
| - | - |
| WEDEPLOY_WEB_PATH | Redirect Hosting target folder |
| WEDEPLOY_WEB_ERROR_PATH | Redirect Hosting error target folder |

</article>
