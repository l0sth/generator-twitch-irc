module.exports = (client) ->

  ###*
  HOSTTARGET(hosting) message sent by JTV.
  @event hosting
  @params {string} channel
  @params {string} target
  @params {string} remains
  ###
  client.addListener "hosting", (channel, target, remains) ->
    # Do your stuff.
  return