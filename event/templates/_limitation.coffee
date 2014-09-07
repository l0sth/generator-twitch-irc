module.exports = (client) ->

  ###*
  Encountered some kind of limitation by Twitch.
  @event limitation
  @params {object} err
  ###
  client.addListener "limitation", (err) ->
    # Do your stuff.
  return