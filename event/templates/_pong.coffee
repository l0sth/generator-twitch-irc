module.exports = (client) ->

  ###*
  Received PONG from server.
  @event pong
  @params {string} latency
  ###
  client.addListener "pong", (latency) ->
    # Do your stuff.
  return