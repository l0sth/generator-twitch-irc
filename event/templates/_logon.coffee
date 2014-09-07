module.exports = (client) ->

  ###*
  Triggers right before the client sends informations to connect to server.
  @event logon
  ###
  client.addListener "logon", ->
    # Do your stuff.
  return