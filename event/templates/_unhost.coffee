module.exports = (client) ->

  ###*
  Channel ended the current hosting.

  @event unhost
  @params {string} channel
  @params {string} remains
  ###
  client.addListener "unhost", (channel, remains) ->
    # Do your stuff.
  return