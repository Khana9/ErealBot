const ms = require("ms")

exports.run = async (client, message, args) => {

    /**Looks for the muted role */
    let muteRole = message.guild.roles.cache.find(r => r.name == "muted");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let muteTime = args[1];

    /**Checks for the users perms, and some command mistakes */
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Haha, you dont have the perms!")
    if (!member) return message.channel.send("Uhh, invalid user given, check ur command!");
    if (!muteTime) return message.channel.send("Oi, you didnt give a time");
    if (!muteRole) return message.channel.send("The mute role isnt found, set it up");

    /**Trying to mute an immortal user */
    if (message.mentions.has(client.user)) return message.channel.send("You cant mute a bot!")
    if (member.roles.highest.position > message.member.roles.highest.position) return message.channel.send("Lol, you cant mute someone with more power")
    if (member.roles.highest.position == message.member.roles.highest.position) return message.channel.send("You cant mute someone with equal powers")


    /**The command to mute the user */
    member.roles.add(muteRole);
    message.channel.send("User has been muted!");

    /**The mute time */
    setTimeout(() => {
        member.roles.remove(muteRole);
        message.channel.send("User has been unmuted")
    }, msTime)
}

exports.help = {
    name: "mute"
}