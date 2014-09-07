module.exports = function(client) {
    /**
     * USERCOLOR message sent by JTV.
     * @event usercolor
     * @params {string} username
     * @params {string} value
     */
    client.addListener('usercolor', function (username, value) {
        // Do your stuff.
    });
};