module.exports = function(client) {
    /**
     * Received a message from JTV.
     * @event jtv
     * @params {string} message
     */
    client.addListener('jtv', function (message) {
        // Do your stuff.
    });
};