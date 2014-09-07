module.exports = (client) ->

  ###*
  Client is trying to reconnect to server.
  @event reconnect
  ###
  client.addListener "reconnect", ->
    # Do your stuff.
  return