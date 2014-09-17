module.exports = (client) ->

  ###*
  Channel enabled or disabled slow mode.

  @event slowmode
  @params {string} channel
  @params {boolean} enabled
  @params {string} length
  ###
  client.addListener "slowmode", (channel, enabled, length) ->
    # Do your stuff.
  return