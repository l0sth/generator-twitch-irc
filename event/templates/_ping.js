module.exports = function(client) {
    /**
     * Received PING from server.
     *
     * @event ping
     */
    client.addListener('ping', function () {
        // Do your stuff.
    });
};