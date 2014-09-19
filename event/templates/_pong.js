module.exports = function(client) {
    /**
     * Sent a PING request ? PONG.
     *
     * @event pong
     * @params {float} latency
     */
    client.addListener('pong', function (latency) {
        // Do your stuff.
    });
};