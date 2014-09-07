module.exports = (client) ->

  ###*
  Received a message from JTV.
  @event jtv
  @params {string} message
  ###
  client.addListener "jtv", (message) ->
    # Do your stuff.
  return