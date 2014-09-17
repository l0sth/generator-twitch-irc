module.exports = function(client) {
    /**
     * User has joined a channel.
     *
     * @event join
     * @params {string} channel
     * @params {string} username
     */
    client.addListener('join', function (channel, username) {
        // Do your stuff.
    });
};