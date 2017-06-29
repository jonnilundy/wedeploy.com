---
title: "Real-time Feeds"
description: "WeDeploy™ Data inverts the traditional database architecture, instead of polling for changes, the developer can tell WeDeploy Data to continuously push updated query results to applications in real-time."
headerTitle: "Data"
layout: "guide"
weight: 8
---

### {$page.title}

###### {$page.description}

<article id="1">

## Watching data changes

We presented a lot of features for data filtering and search. You may be wondering where the real-time aspect is in all of this. Well, it's throughout the features we just presented to you. To access our data in real-time, all we need to do is change the *WeDeploy* API  `get` method to use to the `watch` method:

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.watch('movies')
	.on('changes', function(data) {
		console.log(data);
	})
	.on('fail', function(error) {
		console.log(error);
	});
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in 
	switch(data.type) {
	case .changes:
		print("changes \(data.document)")
	case .error:
		print("error \(data.document)")
	default:
		break
	}
}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.watch("movies")
	.on("changes", data -> System.out.println(data))
	.on("fail", error -> System.out.println(error));
```

Now every time the storage detects changes that affect the query you're watching, you will receive a changes notification with the response body you'd receive if you had done an HTTP GET instead. Furthermore, every time this change leads to an HTTP error response, you'll receive the error object in a fail notification on the client.

</article>	

<article id="2">

## Watching with advanced filters

To present data using advanced search is simple as performing normal queries. You just would need to keep using the `watch` method and apply any filter you desire.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.where('category', 'cinema')
	.or('category', 'cartoon')
	.watch('movies')
	.on('changes', function(data) {
		console.log(data);
	})
	.on('fail', function(error) {
		console.log(error);
	});
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.where(field: "category", op: "=", value: "cinema")
	.or(field: "category", op: "=", value: "cartoon")
	.watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in 
	switch(data.type) {
	case .changes:
		print("changes \(data.document)")
	case .error:
		print("error \(data.document)")
	default:
		break
	}
}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.where(equal("category", "cinema").or("category", "cartoon"))
	.watch("movies")
	.on("changes", data -> System.out.println(data))
	.on("fail", error -> System.out.println(error));
```

</article>

<article id="3">

## Getting the latest changes

The data service uses a query limit `500` by default. In order to always get the latest new record, you would need to limit the query by `1` and order by `id` `desc`.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.limit(1)
	.orderBy('id', 'desc')
	.watch('movies')
	.on('changes', function(data) {
		console.log(data);
	})
	.on('fail', function(error) {
		console.log(error);
	});
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.limit(1)
	.orderBy(field: "id", order: .DESC)
	.watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in 
	switch(data.type) {
	case .changes:
		print("changes \(data.document)")
	case .error:
		print("error \(data.document)")
	default:
		break
	}
}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.limit(1)
	.orderBy("id", SortOrder.DESCENDING)
	.watch("movies")
	.on("changes", data -> System.out.println(data))
	.on("fail", error -> System.out.println(error));
```

</article>

## What's next?

* Now we're ready to save and retrieve data in real-time.
