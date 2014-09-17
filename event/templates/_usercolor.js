module.exports = function(client) {
    /**
     * Used internally by the library
     *
     * Unless you really know what you are doing, you don't really need to catch this kind
     * of event as it is used internally by the library.
     *
     * @event usercolor
     * @params {string} username
     * @params {string} value
     */
    client.addListener('usercolor', function (username, value) {
        // Do your stuff.
    });
};