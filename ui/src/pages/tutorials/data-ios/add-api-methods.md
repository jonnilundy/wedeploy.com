---
title: "Add API Methods"
description: "In this section, you'll learn how to save and get data on iOS using the WeDeploy Swift API Client."
buttonTitle: "I added the API methods"
tutorialTitle: "Getting started with WeDeploy Data on iOS"
parentId: "data-ios"
layout: "tutorial"
time: 80
weight: 7
---

#### Add API Methods

###### Save Data

Now we want to add some code that will save data to a collection. 

To do this, go to `tutorial-data-ios/app/tutorial-data-ios/ToDoListViewController.swift` and paste this code into the "loadToDos" function:

```swift
WeDeploy.data("data.<your-project-id>.wedeploy.io")
	.create(resource: "tasks", object: ["name" : todo])
	.toCallback { objectCreated, error in
		if let objectCreated = objectCreated {
			print("To do added: \(objectCreated)")
			self.toDoTextField.text = ""
		}
		else {
			print("Error: \(error!)")
		}
	}
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.

###### Fetch Data

Next, we want to add the code that will fetch data from the collection. 

To do this, go to `tutorial-data-ios/app/tutorial-data-ios/AddToDoViewController.swift` and paste this cod into the "addToDoClic" function:

```swift
WeDeploy.data("data.<your-project-id>.wedeploy.io")
	.orderBy(field: "id", order: .DESC)
	.limit(5)
	.get(resourcePath: "tasks")
	.toCallback { tasks, error in
		if let tasks = tasks {
			self.todos = tasks.map({ $0["name"] as! String})
			self.tableView.reloadData()
		}
		else {
			print("Error: \(error!)")
		}
	}
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.

<aside>

###### <span class="icon-16-star"></span> Pro Tip

In this tutorial we teach you how to use the `.get()` method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a `.watch()` task which retrieves new data automatically when new data is created, giving you the power of real-time data!

Want to learn more about <a href="http://wedeploy.com/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>?

</aside>