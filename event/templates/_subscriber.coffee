module.exports = (client) ->

  ###*
  Channel enabled or disabled subscribers-only mode.

  @event subscriber
  @params {string} channel
  @params {boolean} enabled
  ###
  client.addListener "subscriber", (channel, enabled) ->
    # Do your stuff.
  return