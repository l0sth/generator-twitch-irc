module.exports = (client) ->

  ###*
  Used internally by the library

  Unless you really know what you are doing, you don't really need to catch this kind
  of event as it is used internally by the library.

  @event emoteset
  @params {string} username
  @params {string} value
  ###
  client.addListener "emoteset", (username, value) ->
    # Do your stuff.
  return