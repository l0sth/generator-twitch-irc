module.exports = (client) ->

  ###*
  Received mods list on a channel.
  @event mods
  @params {string} channel
  @params {array} mods
  ###
  client.addListener "mods", (channel, mods) ->
    # Do your stuff.
  return