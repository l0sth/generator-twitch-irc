module.exports = function(client) {
    /**
     * CLEARCHAT(timeout) message sent by JTV.
     * @event timeout
     * @params {string} channel
     * @params {string} username
     */
    client.addListener('timeout', function (channel, username) {
        // Do your stuff.
    });
};