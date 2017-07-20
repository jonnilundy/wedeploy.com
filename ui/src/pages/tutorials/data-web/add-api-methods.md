---
title: "Add API Methods"
description: "In this section, you'll learn how to save and get data on the web using the WeDeploy API Client."
buttonTitle: "I added the API methods"
tutorialTitle: "Getting started with WeDeploy Data on the web"
parentId: "data-web"
layout: "tutorial"
time: 80
weight: 7
---

#### Add API Methods

###### Save Data

Now we want to add a script that will save data to a collection.

To do this, go to `tutorial-data-web/hosting/index.js` and paste this code:

```javascript
WeDeploy
	.data('data-<projectID>.wedeploy.sh')
	.create('tasks', {name: form.item.value })
	.then(function(response) {
		form.reset();
		form.item.focus();
		console.info('Saved:', response);
	})
	.catch(function(error) {
		console.error(error);
	});
```

**Note:** make sure to replace `<projectID>` with the id of your project.

###### Fetch Data

Next, we want to add a script that will fetch data from the collection.

To do this, go to `list.js` inside of the same folder and paste this code:

```javascript
WeDeploy
	.data('data-<projectID>.wedeploy.sh')
	.orderBy('id', 'desc')
	.limit(5)
	.get('tasks')
	.then(function(response) {
		appendTasks(response);
	})
	.catch(function(error) {
		console.error(error);
	});
```

**Note:** make sure to replace `<projectID>` with the id of your project.

<aside>

###### <span class="icon-16-star"></span> Pro Tip

In this tutorial we teach you how to use the `.get()` method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a `.watch()` task which retrieves new data automatically when new data is created, giving you the power of real-time data!

Want to learn more about <a href="/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>?

</aside>
