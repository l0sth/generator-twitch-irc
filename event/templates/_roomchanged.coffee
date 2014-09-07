module.exports = (client) ->

  ###*
  ROOMCHANGED message sent by JTV.
  @event roomchanged
  @params {string} room
  ###
  client.addListener "roomchanged", (room) ->
    # Do your stuff.
  return