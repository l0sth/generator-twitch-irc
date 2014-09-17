module.exports = function(client) {
    /**
     * Reached a limit by Twitch.
     *
     * @event limitation
     * @params {object} err
     */
    client.addListener('limitation', function (err) {
        // Do your stuff.
    });
};