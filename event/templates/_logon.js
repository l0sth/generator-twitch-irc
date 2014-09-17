module.exports = function(client) {
    /**
     * Connection established, sending informations to server.
     *
     * @event logon
     */
    client.addListener('logon', function () {
        // Do your stuff.
    });
};