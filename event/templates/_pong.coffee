module.exports = (client) ->

  ###*
  Sent a PING request ? PONG.

  @event pong
  @params {string} latency
  ###
  client.addListener "pong", (latency) ->
    # Do your stuff.
  return