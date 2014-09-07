module.exports = function(client) {
    /**
     * ROOMCHANGED message sent by JTV.
     * @event roomchanged
     * @params {string} room
     */
    client.addListener('roomchanged', function (room) {
        // Do your stuff.
    });
};