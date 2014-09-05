var irc = require('./lib/twitch');
var fs = require("fs");

var client = new irc.client({
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action'],
        logging: true,
        tc: <%= botTC %>
    },
    identity: {
        username: '<%= botName %>',
        password: '<%= botAuth %>'
    },
    channels: [<%= botChannels %>]
});

client.connect();

if (fs.existsSync('./commands')) {
    fs.readdirSync('./commands').forEach(function (file) {
        require('./commands/' + file)(client);
    });
}
if (fs.existsSync('./events')) {
    fs.readdirSync('./events').forEach(function(file) {
        require('./events/' + file)(client);
    });
}