module.exports = (client) ->

  ###*
  Received the list of mods of a channel.

  @event mods
  @params {string} channel
  @params {array} mods
  ###
  client.addListener "mods", (channel, mods) ->
    # Do your stuff.
  return