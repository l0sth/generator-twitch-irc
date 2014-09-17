module.exports = function(client) {
    /**
     * Permission restriction by Twitch. (Insufficient access)
     *
     * @event permission
     * @params {object} err
     */
    client.addListener('permission', function (err) {
        // Do your stuff.
    });
};