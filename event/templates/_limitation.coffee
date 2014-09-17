module.exports = (client) ->

  ###*
  Reached a limit by Twitch.

  @event limitation
  @params {object} err
  ###
  client.addListener "limitation", (err) ->
    # Do your stuff.
  return