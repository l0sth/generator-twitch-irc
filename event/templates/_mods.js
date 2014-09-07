module.exports = function(client) {
    /**
     * Received mods list on a channel.
     * @event mods
     * @params {string} channel
     * @params {array} mods
     */
    client.addListener('mods', function (channel, mods) {
        // Do your stuff.
    });
};