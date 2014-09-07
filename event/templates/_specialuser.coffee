module.exports = (client) ->

  ###*
  SPECIALUSER message sent by JTV.
  @event specialuser
  @params {string} username
  @params {string} value
  ###
  client.addListener "specialuser", (username, value) ->
    # Do your stuff.
  return