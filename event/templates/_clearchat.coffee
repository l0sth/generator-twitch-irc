module.exports = (client) ->

  ###*
  Chat of a channel got cleared.

  @event clearchat
  @params {string} channel
  ###
  client.addListener "clearchat", (channel) ->
    # Do your stuff.
  return