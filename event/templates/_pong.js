module.exports = function(client) {
    /**
     * Received PONG from server.
     * @event pong
     */
    client.addListener('pong', function () {
        // Do your stuff.
    });
};