module.exports = (client) ->

  ###*
  User has joined a channel.
  @event join
  @params {string} channel
  @params {string} username
  ###
  client.addListener "join", (channel, username) ->
    # Do your stuff.
  return