module.exports = (client) ->

  ###*
  HOSTTARGET(unhost) message sent by JTV.
  @event unhost
  @params {string} channel
  @params {string} remains
  ###
  client.addListener "unhost", (channel, remains) ->
    # Do your stuff.
  return