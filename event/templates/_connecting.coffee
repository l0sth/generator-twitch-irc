module.exports = (client) ->

  ###*
  Connecting to a server.

  @event connecting
  @params {string} address
  @params {integer} port
  ###
  client.addListener "connecting", (address, port) ->
    # Do your stuff.
  return