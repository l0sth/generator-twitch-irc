module.exports = function(client) {
    /**
     * Connected to server.
     * @event connected
     * @params {string} address
     * @params {integer} port
     */
    client.addListener('connected', function (address, port) {
        // Do your stuff.
    });
};