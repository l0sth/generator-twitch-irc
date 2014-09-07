module.exports = (client) ->

  ###*
  Someone has subscribed to a channel.
  @event subscription
  @params {string} channel
  @params {string} username
  ###
  client.addListener "subscription", (channel, username) ->
    # Do your stuff.
  return