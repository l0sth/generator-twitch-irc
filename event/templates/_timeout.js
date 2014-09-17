module.exports = function(client) {
    /**
     * Someone has been timed out on a channel.
     *
     * @event timeout
     * @params {string} channel
     * @params {string} username
     */
    client.addListener('timeout', function (channel, username) {
        // Do your stuff.
    });
};