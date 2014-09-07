module.exports = (client) ->

  ###*
  Received PONG from server.
  @event pong
  ###
  client.addListener "pong", ->
    # Do your stuff.
  return