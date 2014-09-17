module.exports = function(client) {
    /**
     * Sent a PING request ? PONG.
     *
     * @event pong
     * @params {string} latency
     */
    client.addListener('pong', function (latency) {
        // Do your stuff.
    });
};