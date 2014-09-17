module.exports = (client) ->

  ###*
  Permission restriction by Twitch. (Insufficient access)

  @event permission
  @params {object} err
  ###
  client.addListener "permission", (err) ->
    # Do your stuff.
  return