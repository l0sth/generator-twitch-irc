module.exports = function(client) {
    /**
     * Used for private groups.
     *
     * There is no documentation by Twitch of what it does and when it is triggered.
     *
     * @event roomdeleted
     * @params {string} room
     */
    client.addListener('roomdeleted', function (room) {
        // Do your stuff.
    });
};