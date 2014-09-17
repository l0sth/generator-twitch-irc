module.exports = function(client) {
    /**
     * Used for private groups.
     *
     * There is no documentation by Twitch of what it does and when it is triggered.
     *
     * @event roomchanged
     * @params {string} room
     */
    client.addListener('roomchanged', function (room) {
        // Do your stuff.
    });
};