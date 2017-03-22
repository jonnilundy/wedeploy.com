---
title: "Manage Users"
description: "Create, delete or update users by using WeDeploy™ Auth."
headerTitle: "Auth"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<article id="1">

## Create user

You create a new user in your WeDeploy project by calling the `createUser` method or by signing in a user for the first time using a federated identity provider, such as Google Sign-In or Facebook Login.

```javascript
WeDeploy
	.auth()
	.createUser({
		email: 'user@domain.com',
		password: 'abc'
	})
	.then(function(user) {
		// Successfully created.
	})
	.catch(function(err) {
		// Not created.
	});
```

</article>

<article id="2">

## Get current user

```javascript
var currentUser = WeDeploy.auth().currentUser;

if (currentUser) {
	// User is signed in.
} else {
	// No user is signed in.
}
```

</article>

<article id="3">

## Get user

```javascript
WeDeploy
	.auth()
	.getUser(userId)
	.then(function(user) {
		// User found.
	})
	.catch(function(err) {
		// User does not exist.
	});
```

</article>

<article id="4">

## Delete user

You can delete a user account with the delete method. For example:

```javascript
var currentUser = WeDeploy.auth().currentUser;

currentUser
	.deleteUser()
	.then(function() {
		// Successfully deleted.
	})
	.catch(function(err) {
		// Not deleted.
	});
```

</article>

<article id="5">

## Update user

You can update a user's basic information. For example:

```javascript
var currentUser = WeDeploy.auth().currentUser;

currentUser
	.updateUser({
		password: "password",
		email: "eleven@hawkinslabs.com",
		name: "Eleven",
		photoUrl: "https://hawkinslabs.com/011/profile.jpg"
	})
	.then(function() {
		// Successfully updated.
	})
	.catch(function(err) {
		// Not updated.
	});
```

</article>

<article id="6">

## Send a password reset email

You can send a password reset email to a user with the sendPasswordResetEmail method. For example:

```javascript
WeDeploy
	.auth()
	.sendPasswordResetEmail("user@domain.com")
	.then(function() {
		// Email sent.
	})
	.catch(function(err) {
		// An error happened.
	});
```

</article>

<article id="7">

## Sign-out

```javascript
WeDeploy
	.auth()
	.signOut()
	.then(function() {
		// User is signed out.
	})
	.catch(function(err) {
		// User was signed out.
	});
```

</article>

## What's next?

* Now we're ready to start [authenticating accounts and growing our user base](/docs/auth/sign-in-with-facebook.html).
