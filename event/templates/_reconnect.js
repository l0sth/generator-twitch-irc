module.exports = function(client) {
    /**
     * Client is trying to reconnect to server.
     * @event reconnect
     */
    client.addListener('reconnect', function () {
        // Do your stuff.
    });
};