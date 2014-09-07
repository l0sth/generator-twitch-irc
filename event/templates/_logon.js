module.exports = function(client) {
    /**
     * Triggers right before the client sends informations to connect to server.
     * @event logon
     */
    client.addListener('logon', function () {
        // Do your stuff.
    });
};