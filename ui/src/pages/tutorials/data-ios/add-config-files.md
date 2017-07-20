---
title: "Add Config Files"
description: "In this section, you'll learn how to save and get data on iOS using the WeDeploy Swift API Client."
buttonTitle: "I added the config files"
tutorialTitle: "Getting started with WeDeploy Data on iOS"
parentId: "data-ios"
layout: "tutorial"
time: 60
weight: 5
---

#### Add Config Files

###### wedeploy.json

Since every service folder must have a `wedeploy.json` file that configures the service, let's add one to our Data Service in the repo we just cloned.

1. Open the `tutorial-data-ios` folder in a code editor.
2. Create a new file inside of the `data` folder and name it `wedeploy.json`.
3. Inside of that file, paste this code.

```application/json
{
	"id": "data",
	"image": "wedeploy/data:beta"
}
```

###### api.json

Along with the wedeploy.json, each Data service must have an `api.json` file to configure your database (eg. set path, allow certain methods, and require authentication).

1. Go back to `tutorial-data-ios` in your code editor.
2. Create another file inside of the `data` folder and name it `api.json`.
3. Inside of that file, paste this code.

```application/json
[
	{
		"path": "/tasks/*",
		"data": true
	}
]
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do with your `api.json` file is add other parameters for the collections in your database. One example is to set certain REST methods for each category like this:

```application/json
[
	{
		"path": "/movies/*",
		"data": true,
		"method": ["GET", "PATCH", "PUT", "DELETE"]
	},
	{
		"path": "/shows/*",
		"data": true,
		"method": "POST"
	}
]
```

See the full list of possible <a href="/docs/data/configuring-data.html" target="_blank">data configurations</a>.

</aside>
