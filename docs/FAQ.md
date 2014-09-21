**I can't see who is joining or leaving a channel.**
>If you are using TWITCHCLIENT 3, you will never see who is on a channel and who is joining or leaving a channel. If you are using TWITCHCLIENT 1, you will receive join and part messages in bulk every 15-30 seconds, but this will also disable a few features for your bot, such as catching new subscriptions and getting user details.

**I don't receive any user informations.**
>Make sure that you are using TWITCHCLIENT 3 in your configuration.

**Is it case-sensitive?**
>YES. Javascript is ALWAYS case-sensitive. Most of the events are returning strings in lowercase though. I still recommend to use [.toLowerCase()](http://www.w3schools.com/jsref/jsref_tolowercase.asp) when you compare two values.

**Is there a way to use TWITCHCLIENT 1 and 3?**
>No. Blame Twitch. Seriously, there is one good reason why Twitch doesn't allow this kind of feature.. It would be resource intensive.

**How can I change my TWITCHCLIENT?**
>Open your app.js and change the value of _tc_. If you can't find _tc_, add it in your _options_.

**How can I check if a user is a mod?**
>Send the [mods command](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Command:-Mods) to the channel when you [join](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Join) the channel and use the [mods event](https://github.com/Schmoopiie/generator-twitch-irc/wiki/Event:-Mods) to catch the list of mods. Store the mods in an array and check if the user is a mod. [Click here for an example](https://gist.github.com/Schmoopiie/3a661943fac978c5909f).

**What does TWITCHCLIENT 3 does exactly?**
>If you want to put your bot in more than one channel, you should use TWITCHCLIENT 3, which will cause channel specific messages from JTV to be sent on a channel instead of being sent as a private message. It's also used to receive messages from TwitchNotify for subscriptions and some JTV user details.