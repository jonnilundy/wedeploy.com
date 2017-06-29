---
title: "Updating Data"
description: "The update() function updates an existing record in the database using the current attributes. It then returns the newly updated object in the Promise response."
headerTitle: "Data"
layout: "guide"
weight: 4
---

### {$page.title}

###### {$page.description}

<article id="1">

## Updating existing data

<aside>

By default, all the operation access to your database are restricted so only authenticated users can manipulate data. To get started without setting up Authentication, you can configure your rules for public access. To learn more about rules, see [configuring rules](/docs/data/configuring-data.html) section.

</aside>

Updating existing data is as simple as sending a JSON.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.update('movies/115992383516607958', {
		"rating": 9.1
	}).then(function(movie) {
		console.log(movie);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.update(resourcePath: "movies/115992383516607958", updatedAttributes: [
		"rating": 9.1
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movieJsonObject = new JSONObject()
	.put("rating", 9.1);

WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.update("movies/115992383516607958", movieJsonObject)
	.execute();
```

As you can see, the data api uses Promises to help you to make async requests.

This operation will return the updated document with the new rating:

```javascript
{
	"id":" 115992383516607958",
	"title": "Star Wars IV",
	"year": 1977,
	"rating": 9.1
}
```

</article>

## What's next?

Now that you have learned how to update data, you can interact [deleting data](/docs/data/deleting-data.html).
