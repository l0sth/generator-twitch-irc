module.exports = (client) ->

  ###*
  Encountered some kind of permission restrictions.
  @event permission
  @params {object} err
  ###
  client.addListener "permission", (err) ->
    # Do your stuff.
  return