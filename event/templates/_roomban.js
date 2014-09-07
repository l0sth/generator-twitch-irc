module.exports = function(client) {
    /**
     * ROOMBAN message sent by JTV.
     * @event roomban
     * @params {string} room
     * @params {string} username
     */
    client.addListener('roomban', function (room, username) {
        // Do your stuff.
    });
};