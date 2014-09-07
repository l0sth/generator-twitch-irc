module.exports = function(client) {
    /**
     * Got disconnected from server.
     * @event disconnected
     * @params {string} reason
     */
    client.addListener('disconnected', function (reason) {
        // Do your stuff.
    });
};