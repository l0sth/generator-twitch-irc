# Events Generator

This is an optional feature that comes with the generator.

You can always create the files by yourself and they will be loaded on startup:

**Example** - events\custom_file.js

```javascript
module.exports = function(client) {
    client.addListener('event_name', function (params, here) {
        // Do your stuff.
    });
};
```

## Generating an Event

Generate one of the following event by typing:

```bash
$ yo twitch-irc event:<event name>
```

## Events

- _username_ is always a string.
- _user_ is always an object that contains user informations.

Name | Description | Params
:----|:----|:---
action | Received an action message on a channel. | channel, user, message
chat | Received a chat message on a channel. | channel, user, message
clearchat | Received clearchat from jtv. | channel
connected | Connected to server. | address, port
connectfail | Reached maximum attempt to reconnect to server. | 
connecting | Connecting to a server. | address, port
crash | Client crashed. | message, stack
disconnected | Got disconnected from server. | message
emoteset | Received emoteset from jtv. | username, value
hosted | Room is now hosted by someone else. | channel, username, viewcount
hosting | Received hosttarget from jtv. | channel, target, remaining
join | User has joined a channel. | channel, username
jtv | Received a message from jtv. | message
limitation | Encountered limitation by Twitch. | err
logon | Triggered before sending data while connecting. | 
mods | Received mods list on a channel. | channel, mods
part | User has left a channel. | channel, username
permission | Encountered permission restrictions. | err
ping | Received PING from server. | 
pong | Received PONG from server. | latency
r9kbeta | Room is in r9k mode. | channel, boolean
reconnect | Client is trying to reconnect to server. | 
roomban | Received roomban from jtv. | room, username
roomchanged | Received roomchanged from jtv. | room
roomdeleted | Received roomdeleted from jtv. | room
roominvite | Received roominvite from jtv. | room, username
slowmode | Room is now in slow mode. | channel, boolean, length
specialuser | Received specialuser from jtv. | username, value
subscriber | Room is now in subscribers-only mode. | channel, boolean
subscription | Someone has subscribed to a channel. | channel, username
timeout | Received clearchat from jtv. | channel, username
twitchnotify | Received a message from TwitchNotify. | channel, message
unhost | Received hosttarget from jtv. | channel, remaining
usercolor | Received usercolor from jtv. | channel, username
