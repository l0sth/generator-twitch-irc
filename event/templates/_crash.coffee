module.exports = (client) ->

  ###*
  Client crashed.
  @event crash
  @params {string} message
  @params {string} stack
  ###
  client.addListener "crash", (message, stack) ->
    # Do your stuff.
  return