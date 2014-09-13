module.exports = function(client) {
    /**
     * Received PONG from server.
     * @event pong
     * @params {string} latency
     */
    client.addListener('pong', function (latency) {
        // Do your stuff.
    });
};