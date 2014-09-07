module.exports = (client) ->

  ###*
  User has left a channel.
  @event part
  @params {string} channel
  @params {string} username
  ###
  client.addListener "part", (channel, username) ->
    # Do your stuff.
  return