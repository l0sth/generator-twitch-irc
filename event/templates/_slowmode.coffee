module.exports = (client) ->

  ###*
  Room is now in slow mode.
  @event slowmode
  @params {string} channel
  @params {boolean} status
  @params {string} length
  ###
  client.addListener "slowmode", (channel, status, length) ->
    # Do your stuff.
  return