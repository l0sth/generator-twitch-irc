module.exports = (client) ->

  ###*
  Sent a PING request ? PONG.

  @event pong
  @params {float} latency
  ###
  client.addListener "pong", (latency) ->
    # Do your stuff.
  return