module.exports = function(client) {
    /**
     * Used for private groups.
     *
     * There is no documentation by Twitch of what it does and when it is triggered.
     *
     * @event roominvite
     * @params {string} room
     * @params {string} by username
     */
    client.addListener('roominvite', function (room, username) {
        // Do your stuff.
    });
};