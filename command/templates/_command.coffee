module.exports = (client) ->

  ###*
  Command: <%= command %>
  @event chat
  @params {string} channel
  @params {object} user
  @params {string} message
  ###
  client.addListener "chat", (channel, user, message) ->
    if message.indexOf("<%= command %>") is 0
      params = message.split(" ")

      # Do your stuff.
      client.say channel, "Hey " + user.username + ", this is the default response to <%= command %>."
    return

  return