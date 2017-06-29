---
title: "Deleting Data"
description: "The delete() function destroys an existing field, document or collection in the database."
headerTitle: "Data"
layout: "guide"
weight: 5
---

### {$page.title}

###### {$page.description}

<article id="1">

## Deleting existing data

<aside>

By default, all the operation access to your database are restricted so only authenticated users can manipulate data. To get started without setting up Authentication, you can configure your rules for public access. To learn more about rules, see [configuring rules](/docs/data/configuring-rules.html) section.

</aside>

To delete a field, document, or the entire collection, we use the DELETE method:

```javascript
var data = WeDeploy.data('https://<serviceID>-<projectID>.wedeploy.io');

data.delete('movies/star_wars_v/title');

data.delete('movies/star_wars_v');

data.delete('movies');
```
```swift
let data = WeDeploy.data('https://<serviceID>-<projectID>.wedeploy.io')

data.delete(collectionOrResourcePath: "movies/star_wars_v/title")

data.delete(collectionOrResourcePath: "movies/star_wars_v")

data.delete(collectionOrResourcePath: "movies")
```
```text/x-java
WeDeployData data = WeDeploy.data('https://data-datademo.wedeploy.io');

data.delete("movies/star_wars_v/title");

data.delete("movies/star_wars_v");

data.delete("movies");
```

</article>

## What's next?

Now that you have learned how to update data, you can interact [retrieving data](/docs/data/retrieving-data.html).
