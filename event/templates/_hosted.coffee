module.exports = (client) ->

  ###*
  Room is now hosted by someone else.
  @event hosted
  @params {string} channel
  @params {string} username
  @params {string} viewers count
  ###
  client.addListener "hosted", (channel, username, viewers) ->
    # Do your stuff.
  return