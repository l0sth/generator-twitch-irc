module.exports = function(client) {
    /**
     * ROOMINVITE message sent by JTV.
     * @event roominvite
     * @params {string} room
     * @params {string} by username
     */
    client.addListener('roominvite', function (room, username) {
        // Do your stuff.
    });
};