---
buttonTitle: "I created the container.json"
description: "In this tutorial, you'll learn how to deploy a game in 2 minutes."
layout: "tutorial"
parentId: "oscon"
time: 30
title: "Setup Repo"
tutorialTitle: "OSCON Tutorial"
weight: 1
---

#### Fork the Repo

Go to [github.com/wedeploy/oscon-game](https://github.com/wedeploy/oscon-game#fork-destination-box) and fork the repo.

<figure>
	<img src="/images/tutorials/oscon/1-fork-repo.gif" alt="Fork Repo">
</figure>

#### Create a container.json file 

On the github interface of your new fork:

1. Go to the `hosting` folder and select _create new file_.
2. Paste the bellow code
3. Name the file `container.json`
4. Commit file directly to your fork

```application/json
{ 
	"id": "hosting",
	"type": "wedeploy/hosting:latest"
}
```
<figure>
	<img src="/images/tutorials/oscon/2-create-container.json.gif" alt="Create Container.json">
</figure>
