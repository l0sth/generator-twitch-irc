module.exports = (client) ->

  ###*
  Used for private groups.

  There is no documentation by Twitch of what it does and when it is triggered.

  @event roominvite
  @params {string} room
  @params {string} by username
  ###
  client.addListener "roominvite", (room, username) ->
    # Do your stuff.
  return