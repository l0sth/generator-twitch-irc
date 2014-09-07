module.exports = (client) ->

  ###*
  EMOTESET message sent by JTV.
  @event emoteset
  @params {string} username
  @params {string} value
  ###
  client.addListener "emoteset", (username, value) ->
    # Do your stuff.
  return