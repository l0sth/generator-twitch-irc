module.exports = function(client) {
    /**
     * CLEARCHAT message sent by JTV.
     * @event clearchat
     * @params {string} channel
     */
    client.addListener('clearchat', function (channel) {
        // Do your stuff.
    });
};