module.exports = (client) ->

  ###*
  Used for private groups.

  There is no documentation by Twitch of what it does and when it is triggered.

  @event roomban
  @params {string} room
  @params {string} username
  ###
  client.addListener "roomban", (room, username) ->
    # Do your stuff.
  return