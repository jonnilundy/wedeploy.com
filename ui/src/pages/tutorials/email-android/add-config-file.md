---
title: "Add Config File"
description: "In this section, you'll learn how to send an email on Android using the WeDeploy API Client."
buttonTitle: "I created the wedeploy.json"
tutorialTitle: "Getting started with WeDeploy Email on Android"
parentId: "email-android"
layout: "tutorial"
time: 45
weight: 5
---

#### Add Config File

Since every service folder must have a `wedeploy.json` file that configures the service, let's add one to our Email Service in the repo we just cloned.

1. Open the `tutorial-email-android` folder in a code editor.
2. Create a new file inside of the `email` folder and name it `wedeploy.json`.
3. Inside of that file, paste this code.

```application/json
{
	"id": "email",
	"image": "wedeploy/email:beta"
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do in your `wedeploy.json` file is add environment variables. There are many ways to use these, one example is to change to a unique email provider.

```application/json
{
	"id": "email",
	"image": "wedeploy/email:beta",
	"env" {
		"EMAIL_HOST": "host294.mailrave.com"
	}
}
```

See the full list of <a href="/docs/email/environment-variables.html" target="_blank">Environment Variables for Email</a>.

</aside>
