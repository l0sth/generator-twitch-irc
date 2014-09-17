module.exports = function(client) {
    /**
     * Connecting to a server.
     *
     * @event connecting
     * @params {string} address
     * @params {integer} port
     */
    client.addListener('connecting', function (address, port) {
        // Do your stuff.
    });
};