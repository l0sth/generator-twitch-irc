module.exports = (client) ->

  ###*
  Used internally by the library

  Unless you really know what you are doing, you don't really need to catch this kind
  of event as it is used internally by the library.

  @event jtv
  @params {string} message
  ###
  client.addListener "jtv", (message) ->
    # Do your stuff.
  return