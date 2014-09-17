module.exports = (client) ->

  ###*
  Channel is now hosting another broadcaster.

  @event hosting
  @params {string} channel
  @params {string} target
  @params {string} remains
  ###
  client.addListener "hosting", (channel, target, remains) ->
    # Do your stuff.
  return