module.exports = (client) ->

  ###*
  Used internally by the library

  Unless you really know what you are doing, you don't really need to catch this kind
  of event as it is used internally by the library.

  @event twitchnotify
  @params {string} channel
  @params {string} message
  ###
  client.addListener "twitchnotify", (channel, message) ->
    # Do your stuff.
  return