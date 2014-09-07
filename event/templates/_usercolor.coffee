module.exports = (client) ->

  ###*
  USERCOLOR message sent by JTV.
  @event usercolor
  @params {string} username
  @params {string} value
  ###
  client.addListener "usercolor", (username, value) ->
    # Do your stuff.
  return