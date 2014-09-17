module.exports = function(client) {
    /**
     * Reached maximum attempt to reconnect to server. (default is infinite)
     *
     * @event connectfail
     */
    client.addListener('connectfail', function () {
        // Do your stuff.
    });
};