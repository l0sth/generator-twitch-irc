module.exports = (client) ->

  ###*
  CLEARCHAT(timeout) message sent by JTV.
  @event timeout
  @params {string} channel
  @params {string} username
  ###
  client.addListener "timeout", (channel, username) ->
    # Do your stuff.
  return