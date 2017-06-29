---
title: "Using the API Client"
description: "Make requests to WeDeploy using a standardized interface."
headerTitle: "Intro"
layout: "guide"
weight: 7
---

### {$page.title}

<article id="1">

## JavaScript

###### In order to send/receive requests to/from WeDeploy, we need to include the JavaScript API Client. This library provides a secure and reliable communication channel with WeDeploy. We can do that by adding a script element in a HTML file or to load the library using NPM:

##### Installation

**CDN**

```xml
// Include this in your html
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

**NPM**
```shell
$ npm install --save wedeploy
```

##### Nuances

After installing WeDeploy using NPM, you can load the package like this:

```javascript
const WeDeploy = require('wedeploy');

// In React Native environment you might use 'import'
import WeDeploy from 'wedeploy';
```

WeDeploy is compatible with all major browsers (Chrome, Firefox, Safari, Edge, and IE10+) as well as [React Native](https://facebook.github.io/react-native/) and [React VR](https://facebook.github.io/react-vr/).

The API calls are the same in all JavaScript environments.

</article>

<article id="2">

## Swift

###### If you want to send/receive requests to/from WeDeploy on an iOS App, we also have a solution for that.

##### Installation

In order to start using our Swift API Client you have to do add WeDeploy as Cocoapod.

**Cocoapods**

Add this to your Podfile:

```swift
pod 'WeDeploy'
```

##### Nuances

By default, all swift api requests returns a promise like below.

```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get(resourcePath: "movies")
	.then { movie -> Void in
		print(movie)
	}
```

You are also able to return a callback or observable. These two methods are available:

```swift
// toCallback converts a promise into a callback
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get(resourcePath: "movies")
	.toCallback { movies, error in
		// here you can check the error or the response
	}

// toObservable converts a promise into an observable
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.get(resourcePath: "movies")
	.toObservable()
	.subscribe(
		onNext: { movies in
			// here you receive the movies
		},
		onError: { error in
			// oops something went wrong
		}
	)
```

</article>

<article id="3">

## Android

###### For sending/receiving requests to/from WeDeploy from an Android App, you can use the Android API Client.

##### Installation

In order to start using it, you just need to add the following line to your `build.gradle` file:

```groovy
compile 'com.wedeploy:com.wedeploy.android:beta-20170505'
```

##### Nuances

Before calling any method from WeDeploy, you have to build it's instance:

```text/x-java
WeDeploy weDeploy = new WeDeploy.Builder().build();
```

Then, you are able to synchronously fire requests to WeDeploy by calling `execute()`:

```text/x-java
weDeploy
	.data('https://data-datademo.wedeploy.io')
	.get("movies")
	.execute();
```

You can also fire asynchronous requests by specifying a Callback to the `execute()` method:

```text/x-java
weDeploy
	.data('https://data-datademo.wedeploy.io')
	.get("movies")
	.execute(new Callback() {
		public void onSuccess(Response response) {
			// here you receive the movies
		}

		public void onFailure(Exception e) {
			// oops something went wrong
		}
	});
```

The WeDeploy Android API is RxJava 2 compatible. This means that you can convert the request into a Single RxJava object, which emits either a success or an error event. You must add a dependency to RxAndroid in your project `build.gradle` in order to use it.

```text/x-java
weDeploy
	.data('https://data-datademo.wedeploy.io')
	.get("movies")
	.asSingle()
	.subscribeOn(Schedulers.io())
	.observeOn(AndroidSchedulers.mainThread())
	.subscribe(
		response -> {

		},
		throwable -> {

		});
```

</article>

## What's next?

* Learn more about using [Environment Variables](/docs/intro/environment-variables.html).
