module.exports = function(client) {
    /**
     * Command: <%= command %>
     * @event chat
     * @params {string} channel
     * @params {object} user
     * @params {string} message
     */
    client.addListener('chat', function (channel, user, message) {
        if (message.indexOf('<%= command %>') >= 0) {
            var params = message.split(' ');

            // Do your stuff.
            client.say(channel, 'Hey '+user.username+', this is the default response to <%= command %>.');
        }
    });
};