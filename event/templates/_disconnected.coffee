module.exports = (client) ->

  ###*
  Got disconnected from server.

  @event disconnected
  @params {string} reason
  ###
  client.addListener "disconnected", (reason) ->
    # Do your stuff.
  return