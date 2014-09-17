module.exports = function(client) {
    /**
     * Used for private groups.
     *
     * There is no documentation by Twitch of what it does and when it is triggered.
     *
     * @event roomban
     * @params {string} room
     * @params {string} username
     */
    client.addListener('roomban', function (room, username) {
        // Do your stuff.
    });
};