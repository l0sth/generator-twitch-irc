module.exports = function(client) {
    /**
     * Received a message from TwitchNotify.
     * @event twitchnotify
     * @params {string} channel
     * @params {string} message
     */
    client.addListener('twitchnotify', function (channel, message) {
        // Do your stuff.
    });
};