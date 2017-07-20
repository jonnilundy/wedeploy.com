---
title: "Add API Methods"
description: "In this section, you'll learn how to save and get data on Android using the WeDeploy API Client."
buttonTitle: "I added the API methods"
tutorialTitle: "Getting started with WeDeploy Data on Android"
parentId: "data-android"
layout: "tutorial"
time: 80
weight: 8
---

#### Add API Methods

###### Save Data

Now we want to add some code that will save data to a collection.

To do this, go to `AddToDoActivity.java` and paste this code into the "addToDo" method:

```text/x-java
weDeploy.data("data-<projectID>.wedeploy.sh")
	.create("tasks", jsonObject)
	.execute(new Callback() {
		@Override
		public void onSuccess(Response response) {
			Toast.makeText(AddToDoActivity.this, "To do added", Toast.LENGTH_SHORT).show();
		}

		@Override
		public void onFailure(Exception e) {
			Toast.makeText(AddToDoActivity.this, "Error adding to do", Toast.LENGTH_SHORT)
				.show();
		}
	});
```

**Note:** make sure to replace `<projectID>` with the id of your project.

###### Fetch Data

Next, we want to add the code that will fetch data from the collection.

To do this, go to `ToDoListActivity.java` and paste this code into the "populateList" method:

```text/x-java
weDeploy.data("data-<projectID>.wedeploy.sh")
	.limit(5)
	.orderBy("id", SortOrder.DESCENDING)
	.get("tasks")
	.execute(new Callback() {
		@Override
		public void onSuccess(Response response) {
			try {
				JSONArray array = new JSONArray(response.getBody());
				parseAndAddTodos(array);
			} catch (JSONException e) {
				onFailure(e);
			}
		}

		@Override
		public void onFailure(Exception e) {
			Toast.makeText(ToDoListActivity.this, "Error loading todos", Toast.LENGTH_SHORT).show();
		}
	});
```

**Note:** make sure to replace `<projectID>` with the id of your project.

<aside>

###### <span class="icon-16-star"></span> Pro Tip

In this tutorial we teach you how to use the `.get()` method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a `.watch()` task which retrieves new data automatically when new data is created, giving you the power of real-time data!

Want to learn more about <a href="/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>?

</aside>
