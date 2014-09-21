irc = require("./lib/twitch")
fs = require("fs")
client = new irc.client(
  options:
    debug: true
    debugIgnore: [
      "ping"
      "chat"
      "action"
    ]
    logging: true
  tc: <%= botTC %>
  identity:
    username: "<%= botName %>"
    password: "<%= botAuth %>"
  channels: [<%= botChannels %>]
)

client.connect()

###*
Auto-load commands and events.
###
if fs.existsSync("./commands")
  fs.readdirSync("./commands").forEach (file) ->
    require("./commands/" + file) client
    return

if fs.existsSync("./events")
  fs.readdirSync("./events").forEach (file) ->
    require("./events/" + file) client
    return
