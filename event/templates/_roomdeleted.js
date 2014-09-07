module.exports = function(client) {
    /**
     * ROOMDELETED message sent by JTV.
     * @event roomdeleted
     * @params {string} room
     */
    client.addListener('roomdeleted', function (room) {
        // Do your stuff.
    });
};