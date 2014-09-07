module.exports = (client) ->

  ###*
  Received a message from TwitchNotify.
  @event twitchnotify
  @params {string} channel
  @params {string} message
  ###
  client.addListener "twitchnotify", (channel, message) ->
    # Do your stuff.
  return