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
        var events = ['action','chat','clearchat','connected','connectfail','connecting','crash','disconnected','emoteset','hosted',
        'hosting','join','jtv','limitation','logon','mods','part','permission','ping','pong','r9kbeta','reconnect','roomban',
        'roomchanged','roomdeleted','roominvite','slowmode','specialuser','subscriber','subscription','timeout','twitchnotify',
        'unhost','usercolor'];
        if (arguments.length >= 1 && events.indexOf(arguments[0]) >= 0) {
            this.dest.mkdir('/events');
            if (context.language === 'useJavascript') {
                console.log('['+chalk.green('!')+'] Generating '+chalk.yellow.bold('events\\'+arguments[0]+'.js')+' for you..');
                this.template("_" + arguments[0] + ".js", "events/" + arguments[0] + ".js", context, context);
            } else {
                console.log('['+chalk.green('!')+'] Generating '+chalk.yellow.bold('events\\'+arguments[0]+'.coffee')+' for you..');
                this.template("_" + arguments[0] + ".coffee", "events/" + arguments[0] + ".coffee", context, context);
            }
        } else {
            console.log('['+chalk.green('!')+'] Invalid event name.');
        }
    }
});