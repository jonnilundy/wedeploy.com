---
buttonTitle: "I added the files"
description: "In this section, you'll learn how to enable WeDeploy Email on your application."
layout: "tutorial"
parentId: "email-js"
time: 3
title: "Create files"
tutorialTitle: "Getting started with WeDeploy Email using Javascript"
weight: 3
---

##### Create files

Now that we have the sample files, we can setup our email container. 

First go to `tutorial-email-js` and create a directory named `email`. 

Within that directory, create a new file named `container.json`. This file will designate the id and type of service you are using. Inside of that file, add: 

```application/json
{
	"id": "email",
	"type": "wedeploy/email"
}
```

* `id` is the custom name designated for this service. In future projects, feel free to change this value to whatever best describes your service. 
* `type` tells WeDeploy what service to use. 
