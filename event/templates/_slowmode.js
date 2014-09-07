module.exports = function(client) {
    /**
     * Room is now in slow mode.
     * @event slowmode
     * @params {string} channel
     * @params {boolean} status
     * @params {string} length
     */
    client.addListener('slowmode', function (channel, status, length) {
        // Do your stuff.
    });
};