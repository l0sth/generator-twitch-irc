module.exports = (client) ->

  ###*
  ROOMINVITE message sent by JTV.
  @event roominvite
  @params {string} room
  @params {string} by username
  ###
  client.addListener "roominvite", (room, username) ->
    # Do your stuff.
  return