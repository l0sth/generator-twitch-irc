module.exports = (client) ->

  ###*
  Channel enabled or disabled R9K mode.

  @event r9kbeta
  @params {string} channel
  @params {boolean} enabled
  ###
  client.addListener "r9kbeta", (channel, enabled) ->
    # Do your stuff.
  return