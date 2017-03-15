---
buttonTitle: "I added the files"
description: "In this section, you'll learn how to enable WeDeploy Data on your application."
layout: "tutorial"
parentId: "data-js"
time: 3
title: "Create files"
tutorialTitle: "Getting started with WeDeploy Data using Javascript"
weight: 3
---

##### Create files

Now that we have the sample files, we can setup our data container. 

First go to `tutorial-data-js` and create a directory named `data`. Inside of that directory, we will create a container.json file and an api.json file.

###### Container.json

Create a new file named `container.json`. This file will designate the id and type of service you are using. Within that file, add: 

```application/json
{
	"id": "data",
	"type": "wedeploy/data"
}
```

* `id` is the custom name designated for this service. In future projects, feel free to change this value to whatever best describes your service. 
* `type` tells WeDeploy what service to use. 

###### api.json

Now that you have told WeDeploy what type of service to use and what to call it, you need to designate where you want WeDeploy to store your data.

Create a new file and name it `api.json`. Then add: 

```application/json
[
	{
		"path": "/tasks/*",
		"data": true
	}
]
```

* `path` designates which collection you will be saving and fetching data from. If you want to access all collections on a project, then put {literal}`"/*"`{/literal}.
* `data` tells the service if the request to a collection should be stored or not.

