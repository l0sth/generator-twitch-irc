module.exports = function(client) {
    /**
     * HOSTTARGET(hosting) message sent by JTV.
     * @event hosting
     * @params {string} channel
     * @params {string} target
     * @params {string} remains
     */
    client.addListener('hosting', function (channel, target, remains) {
        // Do your stuff.
    });
};