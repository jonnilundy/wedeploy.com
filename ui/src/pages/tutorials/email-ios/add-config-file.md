---
title: "Add Config File"
description: "In this section, you'll learn how to send an email on iOS using the WeDeploy API Client."
buttonTitle: "I created the container.json"
tutorialTitle: "Getting started with WeDeploy Email on iOS"
parentId: "email-ios"
layout: "tutorial"
time: 45
weight: 4
---

#### Add Config File

Every service folder must have a `container.json` file that configures the service. Let's add one to our Email Service in the repo we just cloned. 

1. Open the `tutorial-email-ios` folder in a code editor.
2. Create a new file inside of the `email` folder and name it `container.json`.
3. Inside of that file, paste this code.

```application/json
{
	"id": "email",
	"type": "wedeploy/email"
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do in your `container.json` file is add environment variables. There are many ways to use these, one example is to change to a unique email provider.

```application/json
{
	"id": "email",
	"type": "wedeploy/email:latest",
	"env" {
		"EMAIL_HOST": "host294.mailrave.com"
	}
}
```

See the full list of <a href="http://wedeploy.com/docs/email/environment-variables.html" target="_blank">Environment Variables for Email</a>.

</aside>
