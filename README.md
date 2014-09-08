**WORK IN PROGRESS**

This is a work in progress. There is no documentation available yet.

# generator-twitch-irc [![Build Status](https://secure.travis-ci.org/Schmoopiie/generator-twitch-irc.png?branch=master)](https://travis-ci.org/Schmoopiie/generator-twitch-irc)
**This project includes**
> [Yeoman](http://yeoman.io) generator by Yeoman Team

> [Twitch-IRC](https://github.com/Schmoopiie/Twitch-IRC) library by Schmoopiie

![](http://i.imgur.com/7PMEvN5.png)
Twitch is a trademark or registered trademark of Twitch Interactive, Inc. in the U.S. and/or other countries. "Twitch-IRC" is not operated by, sponsored by, or affiliated with Twitch Interactive, Inc. in any way.

### What is Yeoman?

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-twitch-irc from npm, run:

```bash
npm install -g generator-twitch-irc
```

Finally, initiate the generator:

```bash
yo twitch-irc
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

### Updating Your Generators

It is important for you to update from time to time your generators. Basically, all you need to to is type a simple word in your command prompt:

```yo
```

### Updating Your Twitch-IRC Library

Go into your project root directory and type:

```yo twitch-irc```

### Generating an event

To make your life easier, you can generate an event using the generator:

```yo twitch-irc:event <event name>```

Please, click here for the events documentation. (TODO)

### Generating a command

This is a new feature and it is optional. Quickly create a command that you would like your bot to respond.

```yo twitch-irc:command !<command name>```

Of course, only the basic code will be written for you. The generator will create a new file for your command in your commands directory and will be loaded when you start your bot.

### Using the database

This is a new feature, you can now insert, add, push or update objects to a collection and load them.

#### Insert, add or push elements

```client.db.insert('collection', elements);```

The elements can be an object or an array of object. The collection name will also be the file created in your database directory. You will have to use the same collection name to load it's data.

**Examples:**

```client.db.insert('monsters', [
 {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"]},
 {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"]},
 {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"]},
 {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"]},
 {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"]},
 {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"]}
]);```

```client.db.insert('monsters', {name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"]});```

---

#### Retrieve elements

```client.db.where('collection', query);```

Querying your collection is easy, you can search using an object or using operators:

**Examples:**

```client.db.where('monsters', {name: "HamoIzm"});```

```=> [{name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"], cid:6}]```

--

```client.db.where('monsters', "@eyes >= 2");```

```=> [
        {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"], cid:0},
        {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"], cid:1},
        {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"], cid:2},
        {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"], cid:4},
        {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"], cid:5},
        {name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"], cid:6}
      ]```

--

```client.db.where('monsters', "(@eyes == 2 && @mythology == 'greek') || (@mythology == 'amazing')");```

```=> [
        {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"], cid:0},
        {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"], cid:5},
        {name: "HamoIzm", mythology: "amazing", eyes: 2, sex: "m", hobbies: ["riddles","hunting"], cid:6}
      ]```

---

#### Retrieve by cid

The cid is not an index in array, cid is related with addition.

**Example:**

```client.db.get('monsters', 3);```

```=> {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"], cid:3}```

---

#### List all elements in a collection

```client.db.list('collection'); ```

**Example:**

```client.db.list('monsters'); ```

---

#### Update an element in a collection

```client.db.update('collection', cid, object); ```

Update an element, it will add un-existed key and replace existed. (cid can't be changed)

**Example:**

```client.db.update('monsters', 5, {eyes: 3, food:"waloo"}); ```

```client.db.get(5); ```

```=> {name: "medusa",  mythology: "greek", eyes: 3, food:"waloo", sex: "f", hobbies: ["coiling","staring"], cid:5}```

---

#### Replace an element

```client.db.replace('collection', cid, object); ```

Replace an element with the same cid.

**Example:**

```client.db.replace('monsters', 6, {car: "Ferrari"}); ```

```client.db.get(6); ```

```=> {car: "Ferrari", cid:6}```

---

#### Remove an element

```client.db.remove('collection', cid); ```

Delete an item by cid.

**Example:**

```client.db.remove('monsters', 1); ```

### License

The MIT License (MIT)

Copyright (c) 2014 Schmoopiie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
