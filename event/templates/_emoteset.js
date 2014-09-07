module.exports = function(client) {
    /**
     * EMOTESET message sent by JTV.
     * @event emoteset
     * @params {string} username
     * @params {string} value
     */
    client.addListener('emoteset', function (username, value) {
        // Do your stuff.
    });
};