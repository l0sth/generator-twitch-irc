module.exports = function(client) {
    /**
     * Channel is now hosted by another broadcaster.
     *
     * @event hosted
     * @params {string} channel
     * @params {string} username
     * @params {string} viewers count
     */
    client.addListener('hosted', function (channel, username, viewers) {
        // Do your stuff.
    });
};