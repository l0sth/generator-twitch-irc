var irc = require('./lib/twitch');

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

// Events Injector