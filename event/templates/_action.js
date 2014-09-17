module.exports = function(client) {
    /**
     * Received action message on a channel. (/me <message>)
     *
     * @event action
     * @params {string} channel
     * @params {object} user
     * @params {string} message
     */
    client.addListener('action', function (channel, user, message) {
        // Do your stuff.
    });
};