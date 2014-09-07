module.exports = function(client) {
    /**
     * HOSTTARGET(unhost) message sent by JTV.
     * @event unhost
     * @params {string} channel
     * @params {string} remains
     */
    client.addListener('unhost', function (channel, remains) {
        // Do your stuff.
    });
};