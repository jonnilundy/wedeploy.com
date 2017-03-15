---
buttonTitle: "I see the to-do list"
description: "In this section, you'll learn how to enable WeDeploy Data on your application."
layout: "tutorial"
parentId: "data-js"
time: 3
title: "Get Data"
tutorialTitle: "Getting started with WeDeploy Data using Javascript"
weight: 6
---

##### Get Data

We fixed the submit button so that it saved the item descriptions, but our list still is not working. Let's fix that!

Open `tutorial-data-js/hosting/list.js` in your text editor. Right bellow `WeDeploy` on line 5, input this code that will get the inputted tasks and append them to the list. 

```javascript
	.data('http://data.tutorial-data-js.wedeploy.io')
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

Now revisit the "Go to item listing" page in your browser and refresh. You should now see the list of items, including your previous entry. 


To see the power of real-time data, open the list and homepage in seperate windows side-by-side so you can watch both. Add a new item to the homepage and see it automatically update the list in real-time. 


