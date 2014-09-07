'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');

var SubGeneratorGenerator = module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
    },

    initializing: function () {
    },

    writing: function () {
        var context = this.config.getAll();
        var events = ['action','chat','clearchat','connected','connectfail','connecting','crash','disconnected','emoteset','hosted',
        'hosting','join','jtv','limitation','logon','mods','part','permission','ping','pong','r9kbeta','reconnect','roomban',
        'roomchanged','roomdeleted','roominvite','slowmode','specialuser','subscriber','subscription','timeout','twitchnotify',
        'unhost','usercolor'];
        if (arguments.length >= 1 && events.indexOf(arguments[0]) >= 0) {
            this.dest.mkdir('/events');
            if (context.language === 'useJavascript') {
                console.log('['+chalk.green('!')+'] Generating '+chalk.yellow.bold('events\\'+arguments[0]+'.js')+' for you..');
                this.template("_" + arguments[0] + ".js", "events/" + arguments[0] + ".js", context, context);
                fs.appendFile('app.js', 'var '+arguments[0]+' = require(\'./events/'+arguments[0]+'\')(client);\r\n', function (err) {});
            } else {
                console.log('['+chalk.green('!')+'] Generating '+chalk.yellow.bold('events\\'+arguments[0]+'.coffee')+' for you..');
                this.template("_" + arguments[0] + ".coffee", "events/" + arguments[0] + ".coffee", context, context);
                fs.appendFile('app.coffee', arguments[0]+' = require(\'./events/'+arguments[0]+'\')(client);\r\n', function (err) {});
            }
        } else {
            console.log('['+chalk.green('!')+'] Invalid event name.');
        }
    }
});