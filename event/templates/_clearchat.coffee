module.exports = (client) ->

  ###*
  CLEARCHAT message sent by JTV.
  @event clearchat
  @params {string} channel
  ###
  client.addListener "clearchat", (channel) ->
    # Do your stuff.
  return