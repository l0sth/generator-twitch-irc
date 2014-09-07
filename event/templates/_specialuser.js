module.exports = function(client) {
    /**
     * SPECIALUSER message sent by JTV.
     * @event specialuser
     * @params {string} username
     * @params {string} value
     */
    client.addListener('specialuser', function (username, value) {
        // Do your stuff.
    });
};