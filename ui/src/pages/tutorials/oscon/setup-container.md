---
buttonTitle: "I created the wedeploy.json"
description: "In this tutorial, you'll learn how to deploy a game in 2 minutes."
layout: "tutorial"
parentId: "oscon"
time: 30
title: "Setup Container"
tutorialTitle: "OSCON 2017"
weight: 3
---

#### Create a wedeploy.json file

On the github interface of your new fork:

1. Go to the `hosting` folder and select _create new file_.
2. Name the file `wedeploy.json`
3. Paste the bellow code
4. Click _Commit new file_

```application/json
{
	"id": "hosting",
	"image": "wedeploy/hosting:beta"
}
```
<figure>
	<img src="/images/tutorials/oscon/2-create-wedeploy.json.gif" alt="Create wedeploy.json">
</figure>
