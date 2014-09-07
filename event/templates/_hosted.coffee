module.exports = (client) ->

  ###*
  Room is now hosted by someone else.
  @event hosted
  @params {string} username
  @params {string} viewers count
  ###
  client.addListener "hosted", (username, viewers) ->
    # Do your stuff.
  return