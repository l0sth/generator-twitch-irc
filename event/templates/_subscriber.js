module.exports = function(client) {
    /**
     * Channel enabled or disabled subscribers-only mode.
     *
     * @event subscriber
     * @params {string} channel
     * @params {boolean} enabled
     */
    client.addListener('subscriber', function (channel, enabled) {
        // Do your stuff.
    });
};