module.exports = function(client) {
    /**
     * Room is in r9k mode.
     * @event r9kbeta
     * @params {string} channel
     * @params {boolean} status
     */
    client.addListener('r9kbeta', function (channel, status) {
        // Do your stuff.
    });
};