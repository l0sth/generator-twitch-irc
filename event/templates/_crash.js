module.exports = function(client) {
    /**
     * Client crashed.
     *
     * @event crash
     * @params {string} message
     * @params {string} stack
     */
    client.addListener('crash', function (message, stack) {
        // Do your stuff.
    });
};