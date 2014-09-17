module.exports = function(client) {
    /**
     * Chat of a channel got cleared.
     *
     * @event clearchat
     * @params {string} channel
     */
    client.addListener('clearchat', function (channel) {
        // Do your stuff.
    });
};