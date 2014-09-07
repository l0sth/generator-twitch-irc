module.exports = (client) ->

  ###*
  ROOMDELETED message sent by JTV.
  @event roomdeleted
  @params {string} room
  ###
  client.addListener "roomdeleted", (room) ->
    # Do your stuff.
  return