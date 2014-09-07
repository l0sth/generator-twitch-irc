module.exports = function(client) {
    /**
     * Encountered some kind of limitation by Twitch.
     * @event limitation
     * @params {object} err
     */
    client.addListener('limitation', function (err) {
        // Do your stuff.
    });
};