---
title: "Saving Data"
description: "The create() function creates a new record in the database using the current attributes. It then returns the newly saved object in the Promise response."
headerTitle: "Data"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<article id="1">

## Inserting new data

<aside>

By default, all the operation access to your database are restricted so only authenticated users can manipulate data. To get started without setting up Authentication, you can configure your rules for public access. To learn more about rules, see configuring rules section.

</aside>

Writing new data is as simple as sending a JSON.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create('movies', {
		"title": "Star Wars IV",
		"year": 1977,
		"rating": 8.7
	}).then(function(movie) {
		console.log(movie);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create(resource: "movies", object: [
		"title" : "Star Wars IV",
		"year" : 1977,
		"ratings" : 8.7
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movieJsonObject = new JSONObject()
	.put("title", "Star Wars IV")
	.put("year", 1977)
	.put("rating", 8.7);

WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.create("movies", movieJsonObject)
	.execute();
```

As you can see, the data api uses Promises to help you to make async requests.

This operation will return the newly created document, with the following generated ID:

```javascript
{
	"id":" "115992383516607958",
	"title": "Star Wars IV",
	"year": 1977,
	"rating": 8.7
}
```

Generated ID is a string and it's structure may vary. It is also possible to define custom app-specific value for the ID, by simply passing the `id` field as part of the new document.

</article>

<article id="2">

## Inserting multiple data

With the same method you're able to create multiple data instead using the method `.create` multiple times.
You just need to use an array instead an object as the second param.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create('movies', [
		{
			"title": "Star Wars III",
			"year": 2005,
			"rating": 8.0
		},
		{
			"title": "Star Wars II",
			"year": 2002,
			"rating": 8.6
		}
	]).then(function(movies) {
		console.log(movies);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create(resource: "movies", object: [
	[
		"title" : "Star Wars III",
		"year" : 2005,
		"ratings" : 8.0
	],
	[
		"title" : "Star Wars II",
		"year" : 2002,
		"ratings" : 8.6
	]
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movie1JsonObject = new JSONObject()
	.put("title", "Star Wars III")
	.put("year", 2005)
	.put("rating", 8.0);

JSONObject movie2JsonObject = new JSONObject()
	.put("title", "Star Wars II")
	.put("year", 2002)
	.put("rating", 8.6);

JSONArray moviesJsonArray = new JSONArray()
	.put(movie1JsonObject)
	.put(movie2JsonObject);

WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.create("movies", moviesJsonArray)
	.execute();
```

This operation will return the newly created array of documents, with the following generated IDs:

```javascript
[
	{
		"id":" 115992383516607959",
		"title": "Star Wars III",
		"year": 2005,
		"rating": 8.0
	},
	{
		"id":" 115992383516607954",
		"title": "Star Wars II",
		"year": 2002,
		"rating": 8.6
	}
]
```

</article>

<article id="3">

## Inserting new fields in an existing collection

WeDeploy Data service is really flexible in therms of data structure. You're able to insert new fiels in a collection by adding the new key in the object param.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create('movies', [
		{
			"title": "Star Wars I",
			"obs": "First in ABC order",
			"year": 1999,
			"rating": 9.0
		}
	]).then(function(movie) {
		console.log(movie);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create(resource: "movies", object: [
		"title": "Star Wars I",
		"obs": "First in ABC order",
		"year": 1999,
		"rating": 9.0
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movieJsonObject = new JSONObject()
	.put("title", "Star Wars I")
	.put("obs", "First in ABC order")
	.put("year", 1999)
	.put("rating", 9.0);

WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.create("movies", movieJsonObject)
	.execute();
```

This operation will return the newly created document, with the following generated ID:

```javascript
{
	"id":" 115992383516607954",
	"title": "Star Wars I",
	"obs": "First in ABC order",
	"year": 1999,
	"rating": 9.0
}
```

</article>

<article id="4">

## URL scope structure

The URL we just created stored a new document in our app's service inside the "movies" collection. More information on how to set up this datastore URL can be seen in the section Building APIs. For now, we only need to know that within the path where the data is mounted. The URL will be interpreted as a key that points to a stored resource like the one below:

```text
/collectionName/documentId/documentProperty/documentInnerProperty
```

For example, to reference the newly created Star Wars rating, we can use the path:

```text
https://<serviceID>-<projectID>.wedeploy.io/movies/115992383516607958/rating
```

</article>

## What's next?

Now that you have learned how to create data, you can interact [updating data](/docs/data/updating-data.html).
