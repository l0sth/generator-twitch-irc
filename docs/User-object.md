The user object is providing you all the informations sent by JTV when a user is sending a message on a channel.

**Informations**
* user.username: {string} Username
* user.special: {array} Can be staff, admin or turbo
* user.color: {string} Color of the username
* user.emote: {array} List of emotes available to this user

**Notice**

When an event returns _username_ as a parameter, it means that only the username (string) is being returned.