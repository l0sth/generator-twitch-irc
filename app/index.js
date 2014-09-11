'use strict';

/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Schmoopiie
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var TwitchIRCGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

      console.log('  _____          _ _       _       ___ ____   ____ ');
      console.log(' |_   _|_      _(_) |_ ___| |__   |_ _|  _ \\ / ___|');
      console.log('   | | \\ \\ /\\ / / | __/ __| \'_ \\   | || |_) | |    ');
      console.log('   | |  \\ V  V /| | || (__| | | |  | ||  _ <| |___ ');
      console.log('   |_|   \\_/\\_/ |_|\\__\\___|_| |_| |___|_| \\_\\\\____|');

      console.log(' ');
      var oldConfig = this.config.getAll();
      if (Object.getOwnPropertyNames(oldConfig).length === 0) {
          console.log(chalk.yellow.bold('I will generate a Twitch IRC bot for you in a few steps..'));
      } else {
          console.log(chalk.yellow.bold('Checking for updates..'));
      }
      console.log(' ');
    var prompts = [{
        type: 'list',
        name: 'language',
        message: 'Please, select your language:',
        choices:[{
            name: 'Javascript',
            value: 'useJavascript',
            checked: true
        },{
            name: 'CoffeeScript',
            value: 'useCoffeescript',
            checked: false
        }]
    },
    {
        name: 'botTwitch',
        message: 'Sweet! What is the username of your bot on Twitch?'
    },
    {
        when: function(props) { return props.botTwitch.length >= 1; },
        name: 'botTwitchAuth',
        message: 'Okay, what is your oauth token? (visit http://www.twitchapps.com/ to generate it)'
    },
    {
        when: function(props) { return props.botTwitchAuth.length >= 1; },
        name: 'botTwitchTC',
        message: 'Does your bot needs to receive messages from jtv?',
        default: 'Y/n'
    },
    {
        when: function(props) { return props.botTwitchTC.length >= 1; },
        type: 'list',
        name: 'server',
        message: 'What type of server does your bot needs to join?',
        choices:[{
            name: 'Regular',
            value: 'channelRegular',
            checked: true
        },
        {
            name: 'Events',
            value: 'channelEvent',
            checked: false
        },
        {
            name: 'Groups',
            value: 'channelGroup',
            checked: false
        }]
    },
    {
        when: function(props) { return (/channelRegular/i).test(props.server) || (/channelEvent/i).test(props.server); },
        name: 'channels',
        message: 'What channel(s) would you like to join? (Separated with commas)'
    }];

    if (Object.getOwnPropertyNames(oldConfig).length === 0) {
        this.prompt(prompts, function (props) {
            this.language = props.language;
            this.botTwitch = props.botTwitch;
            this.botTwitchAuth = (props.botTwitchAuth.substring(0, 6) === 'oauth:' ? props.botTwitchAuth : 'oauth:' + props.botTwitchAuth);
            this.botTwitchTC = props.botTwitchTC;
            this.server = props.server;
            this.channels = (props.channels ? props.channels.replace(/#/g, '').replace(/ /g, '').toLowerCase().split(',') : '');
            done();
        }.bind(this));
    } else { done(); }
  },

  writing: {
    app: function () {
        var done = this.async();
        var oldConfig = this.config.getAll();
        if (Object.getOwnPropertyNames(oldConfig).length === 0) {
            this.dest.mkdir('commands');
            this.dest.mkdir('database');
            this.dest.mkdir('events');
            this.dest.mkdir('logs');
            this.dest.mkdir('lib');
            this.dest.mkdir('lib/twitch');
            var TC;
            if (this.botTwitchTC.toLowerCase() === 'y') {
                TC = 3;
            }
            var channels = this.channels.length === 0 ? "" : "'" + this.channels.join("','") + "'";
            var context = {
                botName: this.botTwitch,
                botAuth: this.botTwitchAuth,
                botChannels: channels.replace("''", ""),
                botTC: TC || 1
            };
            if (this.language === 'useJavascript') {
                this.template("twitch/javascript/app.js", "app.js", context);
            } else {
                this.template("twitch/coffeescript/app.coffee", "app.coffee", context);
            }
            this.remote('Schmoopiie', 'Twitch-IRC', 'master', function (err, remote) {
                remote.directory('./javascript/twitch', './lib/twitch');
                this.conflicter.resolve(done);
            }.bind(this), true);
            this.template("_package.json", "package.json", context);
            this.template("_README.md", "README.md", context);
        } else {
            this.remote('Schmoopiie', 'Twitch-IRC', 'master', function (err, remote) {
                remote.directory('./javascript/twitch', './lib/twitch');
                this.conflicter.resolve(done);
            }.bind(this), true);
        }
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
     var language = this.language;
     var server = this.server;
     var oauth = this.botTwitchAuth;
     var oldConfig = this.config.getAll();
     this.installDependencies({
         bower: false,
         npm: true,
         skipInstall: false,
         callback: function () {
             if (Object.getOwnPropertyNames(oldConfig).length === 0) {
                 this.config.set({
                     "language": this.language,
                     "botTwitch": this.botTwitch,
                     "botTwitchAuth": this.botTwitchAuth,
                     "botTwitchTC": this.botTwitchTC,
                     "server": this.server,
                     "channels": this.channels
                 });
             }
             console.log(' ')
             console.log('['+chalk.green('!')+'] Thank you for choosing Twitch-IRC!');
             if (language === 'useJavascript') {
                 if (Object.getOwnPropertyNames(oldConfig).length === 0) {
                     console.log('[' + chalk.green('!') + '] You can change the configuration of your bot in app.js');
                 }
                 console.log('['+chalk.green('!')+'] Type '+chalk.yellow.bold('node app.js')+' to start your bot.');
             } else if (language === 'useCoffeescript') {
                 if (Object.getOwnPropertyNames(oldConfig).length === 0) {
                     console.log('[' + chalk.green('!') + '] You can change the configuration of your bot in app.coffee');
                 }
                 console.log('['+chalk.green('!')+'] Type '+chalk.yellow.bold('coffee app.coffee')+' to start your bot.');
             }
             if (server === 'channelGroup' && Object.getOwnPropertyNames(context).length === 0) {
                 console.log(' ');
                 console.log('['+chalk.green('!')+'] NOTE: Your group channel names are listed on '+chalk.cyan.bold('http://chatdepot.twitch.tv/room_memberships?oauth_token='+oauth.replace('oauth:', '')))
             }
             console.log(' ')
             console.log('['+chalk.green('!')+'] If you have any question, send me a message on Twitter '+chalk.yellow.bold('@Schmoopiie')+'!');
             console.log(' ')
         }.bind(this)
     });
  }
});

module.exports = TwitchIRCGenerator;
