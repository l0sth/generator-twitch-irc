Depending on your needs, you have the choice to create the files by yourself, or save time using the generator. If you decide to create your own files, please follow the directives below.

## Without the Generator

All the files created in your events directory will be loaded automatically when your bot is loading.

**Example** - events\custom_file.js

```javascript
module.exports = function(client) {
    client.addListener('event_name', function (params, here) {
        // Do your stuff.
    });
};
```

## With the Generator

Generate one of the following events by typing:

```bash
$ yo twitch-irc event:<event name>
```

## Events

List of available events. Click on the event name for more informations and to know how to use it. If you are using the generator, all you need is the event name.

Name | Description
:----|:----
[action](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Action) | Received action message on a channel.
[chat](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Chat) | Received message on a channel.
[clearchat](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Clearchat) | Chat of a channel got cleared.
[connected](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Connected) | Connected to server.
[connectfail](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Connectfail) | Reached maximum attempts to reconnect to server.
[connecting](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Connecting) | Connecting to a server.
[crash](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Crash) | Client crashed.
[disconnected](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Disconnected) | Got disconnected from server.
[emoteset](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Emoteset) | Used internally by the library.
[hosted](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Hosted) | Channel is now hosted by another broadcaster.
[hosting](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Hosting) | Channel is now hosting another broadcaster.
[join](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Join) | User has joined a channel.
[jtv](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Jtv) | Used internally by the library.
[limitation](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Limitation) | Reached a limit by Twitch.
[logon](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Logon) | Connection established, sending informations to server.
[mods](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Mods) | Received the list of mods of a channel.
[part](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Part) | User has left a channel.
[permission](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Permission) | Permission restriction by Twitch. (Insufficient access)
[ping](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Ping) | Received PING from server.
[pong](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Pong) | Sent a PING request ? PONG.
[r9kbeta](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-R9kbeta) | Channel enabled or disabled R9K mode.
[reconnect](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Reconnect) | Client is trying to reconnect to server.
[roomban](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Roomban) | Used for private groups.
[roomchanged](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Roomchanged) | Used for private groups.
[roomdeleted](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Roomdeleted) | Used for private groups.
[roominvite](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Roominvite) | Used for private groups.
[slowmode](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Slowmode) | Channel enabled or disabled slow mode.
[specialuser](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Specialuser) | Used internally by the library.
[subscriber](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Subscriber) | Channel enabled or disabled subscribers-only mode.
[subscription](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Subscription) | Someone has subscribed to a channel.
[timeout](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Timeout) | Someone has been timed out on a channel.
[twitchnotify](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Twitchnotify) | Used internally by the library.
[unhost](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Unhost) | Channel ended the current hosting.
[usercolor](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Usercolor) | Used internally by the library.