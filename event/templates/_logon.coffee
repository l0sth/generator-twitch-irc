module.exports = (client) ->

  ###*
  Connection established, sending informations to server.

  @event logon
  ###
  client.addListener "logon", ->
    # Do your stuff.
  return