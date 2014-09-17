module.exports = (client) ->

  ###*
  Used for private groups.

  There is no documentation by Twitch of what it does and when it is triggered.

  @event roomchanged
  @params {string} room
  ###
  client.addListener "roomchanged", (room) ->
    # Do your stuff.
  return