module.exports = function(client) {
    /**
     * Channel ended the current hosting.
     *
     * @event unhost
     * @params {string} channel
     * @params {string} remains
     */
    client.addListener('unhost', function (channel, remains) {
        // Do your stuff.
    });
};