---
buttonTitle: "I see the new tasks in the console"
description: "In this section, you'll learn how to enable WeDeploy Data on your application."
layout: "tutorial"
parentId: "data-js"
time: 3
title: "Save Data"
tutorialTitle: "Getting started with WeDeploy Data using Javascript"
weight: 5
---

##### Save Data

As you may of noticed, the "Add Item" button is not working and the list is not being populated with data. Lets start by making the button save data.

Open `tutorial-data-js/hosting/index.js` in your text editor. Right bellow `WeDeploy` on line 6, input this code that will create a new item when you click "Add Item" and save it to your `tasks` data collection. 

```javascript
	.data('http://data.tutorial-data-js.wedeploy.io')
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

Now go back to the [homepage](http://tutorial-data-js.wedeploy.me) and open up the console (*Mac*: ⌥⌘+J, *Windows*: Ctrl+Shift+J). 

Type a new task and click "Add Item". You should see a new log in the console bellow that looks something like {literal}`Saved: Object {name: "Your Item", id: "209513589"}`{/literal}. This means our submit function is working.


      
