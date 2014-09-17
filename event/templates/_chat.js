module.exports = function(client) {
    /**
     * Received message on a channel.
     *
     * @event chat
     * @params {string} channel
     * @params {object} user
     * @params {string} message
     */
    client.addListener('chat', function (channel, user, message) {
        // Do your stuff.
    });
};