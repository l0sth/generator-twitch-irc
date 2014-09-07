module.exports = (client) ->

  ###*
  ROOMBAN message sent by JTV.
  @event roomban
  @params {string} room
  @params {string} username
  ###
  client.addListener "roomban", (room, username) ->
    # Do your stuff.
  return