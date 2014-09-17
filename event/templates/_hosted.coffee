module.exports = (client) ->

  ###*
  Channel is now hosted by another broadcaster.

  @event hosted
  @params {string} channel
  @params {string} username
  @params {string} viewers count
  ###
  client.addListener "hosted", (channel, username, viewers) ->
    # Do your stuff.
  return