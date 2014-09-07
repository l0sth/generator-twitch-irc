module.exports = (client) ->

  ###*
  Someone has sent an action message on a channel.
  @event action
  @params {string} channel
  @params {object} user
  @params {string} message
  ###
  client.addListener "action", (channel, user, message) ->
    # Do your stuff.
  return