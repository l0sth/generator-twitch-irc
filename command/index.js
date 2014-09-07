'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var SubGeneratorGenerator = module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
    },

    initializing: function () {
    },

    writing: function () {
        var context = this.config.getAll();
        if (arguments.length >= 1) {
            this.dest.mkdir('/commands');
            context.command = arguments[0];
            if (context.language === 'useJavascript') {
                console.log('['+chalk.green('!')+'] Generating '+chalk.yellow.bold('commands\\'+arguments[0].toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")+'.js')+' for you..');
                this.template("_command.js", "commands/" + arguments[0].toLowerCase().replace(/[^a-zA-Z0-9]+/g, "") + ".js", context, context);
            } else {
                console.log('['+chalk.green('!')+'] Generating '+chalk.yellow.bold('commands\\'+arguments[0].toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")+'.coffee')+' for you..');
                this.template("_command.coffee", "commands/" + arguments[0].toLowerCase().replace(/[^a-zA-Z0-9]+/g, "") + ".coffee", context, context);
            }
        } else {
            console.log('['+chalk.green('!')+'] You need to type a command name.');
        }
    }
});