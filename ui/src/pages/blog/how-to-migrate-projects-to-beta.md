---
title: "How to Migrate Projects to Beta"
description: "There are many features we rolled out with Beta that effect your old projects. This is a simple guide about how to migrate your projects and data to our new infrastructure without skipping a beat."
date: "July 31, 2017"
author: "Jonni Lundy"
image: "/images/blog/post-13--0.png"
layout: "blog"
---

<article>

<figure style="margin-top: -1.5rem">
	<img src="../images/blog/post-13--0.png" alt="Beta Migration">
</figure>

On July 31st, we announced [our new Beta version of WeDeploy](/blog/). With that release we introduced the new infrastructure on AWS that can be accessed by our [Console](https://console.wedeploy.com). Along with that big infrastructure change, we also introduced other things like custom Docker images and HTTPS, which lead to a big question that you might be asking yourself: will the projects I built on Alpha work on Beta? The answer is 'yes', but there are a few easy changes that need to be made. Below is a guide on how to seamlessly do that!

---

#### Migrating Projects

We have made some fundamental changes to the way you setup your project source code and simplified the way you deploy your apps. Walk through these easy steps and your project will be ready for deployment. If you have any trouble, feel free to tap on the green button in the bottom corner to talk to a WeDeploy human, we'd love to help.

##### Step One: Config Files

1. Delete `project.json`. We are no longer using these files.
2. Rename all `conatiner.json` files to `wedeploy.json`.
3. In `wedeploy.json`, change `type` to `image` and add `:beta` tag to end of image.

Here is an example of what the new `wedeploy.json` will look like.

```application/json
{
	"id": "ui",
	"image": "wedeploy/hosting:beta"
}
```

So what happened to the `project.json`? We wanted to simplify source configuration so you can deploy faster and easier. This meant moving all configuration to the `wedeploy.json` for simplicity and moving the things you could config in the `project.json` to the Console and the command line.

For example, now when you deploy with our CLI, you can easily choose the project ID (which was something you used to do in the `project.json`), by simply add `--project projectID` to your command.

```xml
we deploy --project myapp
```

##### Step Two: API Client

1. Add `https` to all CDN links to the API client (yes, just simply add the 's').
2. For your API endpoints, change the url's to reflect the new url structure (serviceID.projectID.wedeploy.io > serviceID-projectID.wedeploy.io).
3. The Email API for JavaScript has changes. See [the documentation](/docs/email/sending-email.html) for updates.

---

#### Migrating Data Collections

Once you have your project redeployed on the Console, you might want to migrate your old data to your new site. Follow these instructions to do that.

##### Step One: Save Data

1. Go to the [Dashboard](http://dashboard.wedeploy.com) of the project you are fetching the collection from and select the Data service.
2. Click the link of your data service at the top and amend the collection you are wanting to migrate to the url like this: `data-demo.wedeploy.io/todos`. If you have authentication parameters on your collection, you will need to update your `api.json` and deploy again.
3. Now that you can see a your collection, press cmd + s to save as a JSON file onto your machine.

##### Step Two: Post Data

1. Now open up your terminal and paste the script below. Make sure to replace your new project’s info in place of serviceID, projectID, [desired] collectionID, and masterToken.

	```xml
	curl --request POST \
	  --url https://serviceID-projectID.wedeploy.sh/collectionID \
	  --header 'authorization: bearer masterToken' \
	  --header 'content-type: application/json' \
	  --data 'databaseDocuments'
	```

2. Open the JSON file you saved, select all the contents, copy to your clipboard, and paste into the script where you see databaseDocuments (inside the apostrophes).
3. Now you can run the command. If it worked, you should see a response similar to this:

	```xml
	{"hasFailures":false,"results":[{"created":true,"document":{"id":"234841345046097992"},"successful":true},{"created":true,"document":{"id":"234841345053839632"},"successful":true}]}%
	```

4. Now you can go to that data service on the [Console](https://console.wedeploy.com) and click on the _Database_ section. You should now be able to see the documents you saved.

</article>
