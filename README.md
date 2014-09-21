**WORK IN PROGRESS**

This is a work in progress. Currently working on the documentation and fixing bugs.

# generator-twitch-irc
[![Build Status](https://secure.travis-ci.org/Schmoopiie/generator-twitch-irc.png?branch=master)](https://travis-ci.org/Schmoopiie/generator-twitch-irc) [![Code Climate](https://codeclimate.com/github/Schmoopiie/generator-twitch-irc/badges/gpa.svg)](https://codeclimate.com/github/Schmoopiie/generator-twitch-irc)

**This project includes**
> [Yeoman](http://yeoman.io) generator by Yeoman Team

> [Twitch-IRC](https://github.com/Schmoopiie/Twitch-IRC) library by Schmoopiie

![](http://i.imgur.com/7PMEvN5.png)
Twitch is a trademark or registered trademark of Twitch Interactive, Inc. in the U.S. and/or other countries. "Twitch-IRC" is not operated by, sponsored by, or affiliated with Twitch Interactive, Inc. in any way.

## What is Yeoman?

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

## Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-twitch-irc from npm, run:

```bash
$ npm install -g generator-twitch-irc
```

Finally, initiate the generator:

```bash
$ yo twitch-irc
```

## Getting to know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Updating your Generators

It is important for you to update from time to time your generators. Basically, all you need to to is type a simple word in your command prompt:

```bash
$ yo
```

## Updating your Twitch-IRC library

Go into your project root directory and type:

```bash
$ yo twitch-irc
```

## Generating Events

Generated events will be created in your events directory and will be loaded on startup.

```bash
$ yo twitch-irc:event <event name>
```

[Click here for the events documentation](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Events).

## Generating Commands

Generated commands will be created in your commands directory and will be loaded on startup.

```bash
$ yo twitch-irc:command !<command name>
```

Only the basic code will be written for you.

## Using Twitch Commands

Please, check the [wiki](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Commands) for more informations.

## Database

Create collections and interact with them like any database management system. Your collections will be saved in your database directory previously generated by the generator.

[Click here for the database documentation](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Database).

## Contributing Guidelines

Please review the [guidelines for contributing](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Contributing) to this repository.

## License

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
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
