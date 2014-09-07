module.exports = (client) ->

  ###*
  Connected to server.
  @event connected
  @params {string} address
  @params {integer} port
  ###
  client.addListener "connected", (address, port) ->
    # Do your stuff.
  return