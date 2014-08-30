module.exports = (client) ->

  client.addListener "chat", (channel, user, message) ->
  #
  return