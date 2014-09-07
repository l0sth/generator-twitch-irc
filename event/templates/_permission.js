module.exports = function(client) {
    /**
     * Encountered some kind of permission restrictions.
     * @event permission
     * @params {object} err
     */
    client.addListener('permission', function (err) {
        // Do your stuff.
    });
};