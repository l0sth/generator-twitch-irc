module.exports = (client) ->

  ###*
  Received PING from server.
  @event ping
  ###
  client.addListener "ping", ->
    # Do your stuff.
  return