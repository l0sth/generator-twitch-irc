module.exports = function(client) {
    /**
     * User has left a channel.
     * @event part
     * @params {string} channel
     * @params {string} username
     */
    client.addListener('part', function (channel, username) {
        // Do your stuff.
    });
};