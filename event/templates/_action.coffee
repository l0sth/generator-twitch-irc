module.exports = (client) ->

  ###*
  Received action message on a channel. (/me <message>)

  @event action
  @params {string} channel
  @params {object} user
  @params {string} message
  ###
  client.addListener "action", (channel, user, message) ->
    # Do your stuff.
  return