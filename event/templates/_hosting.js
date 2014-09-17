module.exports = function(client) {
    /**
     * Channel is now hosting another broadcaster.
     *
     * @event hosting
     * @params {string} channel
     * @params {string} target
     * @params {string} remains
     */
    client.addListener('hosting', function (channel, target, remains) {
        // Do your stuff.
    });
};