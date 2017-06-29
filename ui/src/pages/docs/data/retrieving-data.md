---
title: "Retrieving Data"
description: "The get() function retrieve an existing field, document or collection in the database."
headerTitle: "Data"
layout: "guide"
weight: 6
---

### {$page.title}

###### {$page.description}

<article id="1">

## Get data

Reading data from our storage takes only 3 lines of code.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get('movies/star_wars_v')
	.then(function(movie) {
		console.log(movie);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get(resourcePath: "movies/star_wars_v")
	.then { movie in
		print(movie)
	}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.get("movies/star_wars_v")
	.execute();
```

The response body is the stored JSON document:

```javascript
{
	"id": "star_wars_v",
	"title": "Star Wars: Episode V - The Empire Strikes Back",
	"year": 1980,
	"rating": 8.8
}
```

We can also get any field value using the full path:

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get('movies/star_wars_v/title')
	.then(function(title) {
		console.log(title);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get(resourcePath: "movies/star_wars_v/title")
	.then { (movie: String) in // You have to specify the type here to allow compiler infer type
		print(movie)
	}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.get("movies/star_wars_v/title")
	.execute();
```

The full path returns the raw content in the response body:

Star Wars: Episode V - The Empire Strikes Back
Requesting the entire movies collection using `curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies"` results in the first 10 documents stored:

```javascript
[
	{"id":"star_wars_i", "title":"Star Wars: Episode I - The Phantom Menace", "year":1999, "rating":6.5},
	{"id":"star_wars_ii", "title":"Star Wars: Episode II - Attack of the Clones", "year":2002, "rating":6.7},
	{"id":"star_wars_iii", "title":"Star Wars: Episode III - Revenge of the Sith", "year":2005, "rating":7.7},
	{"id":"star_wars_iv", "title":"Star Wars: Episode IV - A New Hope", "year":1977, "rating":8.7},
	{"id":"star_wars_v", "title":"Star Wars: Episode V - The Empire Strikes Back", "year":1980, "rating":8.8},
	{"id":"star_wars_vi", "title":"Star Wars: Episode VI - Return of the Jedi", "year":1983, "rating":8.4},
	{"id":"star_wars_vii", "title":"Star Wars: Episode VII - The Force Awakens", "year":2015}
]
```

</article>

<article id="2">

## Sorting data

The result is ordered by document id, as we can see in the list above. We can select the order of the results by passing a sort parameter, using the following code:

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.orderBy('rating', 'desc')
	.get('movies')
	.then(function(movies) {
		console.log(movies);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.orderBy(field: "rating", order: .DESC)
	.get(resourcePath: "movies")
	.then { movies in
		print(movies)
	}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.orderBy("rating", SortOrder.DESCENDING)
	.get("movies")
	.execute();
```

As expected, the result would be the following list:

```javascript
[
	{"id":"star_wars_v","title":"Star Wars: Episode V - The Empire Strikes Back","year":1980,"rating":8.8},
	{"id":"star_wars_iv","title":"Star Wars: Episode IV - A New Hope","year":1977,"rating":8.7},
	{"id":"star_wars_vi","title":"Star Wars: Episode VI - Return of the Jedi","year":1983,"rating":8.4},
	{"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7},
	{"id":"star_wars_ii","title":"Star Wars: Episode II - Attack of the Clones","year":2002,"rating":6.7},
	{"id":"star_wars_i","title":"Star Wars: Episode I - The Phantom Menace","year":1999,"rating":6.5},
	{"id":"star_wars_vii","title":"Star Wars: Episode VII - The Force Awakens","year":2015}
]
```

Notice that because Episode VII has no rating (as it was not released yet), it's sorted as the last document.

</article>

<article id="3">

## Applying filters

In addition to sorting the results, we can also apply filters using the following code:

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.where('year', '<', 2000)
	.or('rating', '>', 8.5)
	.get('movies')
	.then(function(movies) {
		console.log(movies);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.where(field: "year", op: "<", value: 2000)
	.or(field: "rating", op: ">", value: 8.5)
	.get(resourcePath: "movies")
	.then { movies in
		print(movies)
	}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.where(lt("year", 2000).or(gt("rating", 8.5)))
	.get("movies")
	.execute();
```

The following entries are the result of the above filters:

```javascript
[
	{"id":"star_wars_iv","title":"Star Wars: Episode IV - A New Hope","year":1977,"rating":8.7},
	{"id":"star_wars_v","title":"Star Wars: Episode V - The Empire Strikes Back","year":1980,"rating":8.8}
]
```

</article>

<article id="4">

## Pagination

We can also paginate the result using the 'limit' and 'offset' properties. Combining all the tools we've learned so far, we can run a detailed query on our data:

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.where('year', '>', 2000)
	.orderBy('rating')
	.limit(2)
	.offset(1)
	.get('movies')
	.then(function(movies) {
		console.log(movies);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.where(field: "year", op: "<", value: 2000)
	.orderBy(field: "rating", order: .ASC)
	.limit(2)
	.offset(1)
	.get(resourcePath: "movies")
	.then { movies in
		print(movies)
	}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.where(gt("year", 2000))
	.orderBy("rating")
	.limit(2)
	.offset(1)
	.get("movies")
	.execute();
```

Notice that filtering by year only returns episodes I, II, III, and VII. Applying the 'rating' sort will give us this same order. We also limited the result to show only two documents and skip the first one. The final result is the following entries:

```javascript
[
	{"id":"star_wars_ii","title":"Star Wars: Episode II - Attack of the Clones","year":2002,"rating":6.7},
	{"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7}
]
```

We support all basic SQL-like operators (=, !=, >, >=, <, <=, ~), as well as 'any' and 'none' to filter elements in a list. We also give support for search operators, which we will see in more detail in the section Search Data.

</article>

## What's next?

Now that you have learned how to retrieve data, you can interact [searching data](/docs/data/searching-data.html).
