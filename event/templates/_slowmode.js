module.exports = function(client) {
    /**
     * Channel enabled or disabled slow mode.
     *
     * @event slowmode
     * @params {string} channel
     * @params {boolean} enabled
     * @params {string} length
     */
    client.addListener('slowmode', function (channel, enabled, length) {
        // Do your stuff.
    });
};