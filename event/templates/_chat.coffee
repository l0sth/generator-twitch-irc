module.exports = (client) ->

  ###*
  Received a chat message on a channel.
  @event chat
  @params {string} channel
  @params {object} user
  @params {string} message
  ###
  client.addListener "chat", (channel, user, message) ->
    # Do your stuff.
  return