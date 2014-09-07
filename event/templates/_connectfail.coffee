module.exports = (client) ->

  ###*
  Reached maximum attempt to reconnect to server. (default is infinite)
  @event connectfail
  ###
  client.addListener "connectfail", ->
    # Do your stuff.
  return