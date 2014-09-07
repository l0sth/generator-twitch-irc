module.exports = (client) ->

  ###*
  Room is now in subscribers-only mode.
  @event subscriber
  @params {string} channel
  @params {boolean} status
  ###
  client.addListener "subscriber", (channel, status) ->
    # Do your stuff.
  return