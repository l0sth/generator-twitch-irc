module.exports = function(client) {
    /**
     * Received the list of mods of a channel.
     *
     * @event mods
     * @params {string} channel
     * @params {array} mods
     */
    client.addListener('mods', function (channel, mods) {
        // Do your stuff.
    });
};