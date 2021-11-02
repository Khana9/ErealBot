exports.run = async (client, message, args) => {

    /**This gets the list of members */
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])  
    let reason = args.slice(1).join(" ");
    
    /**This checks the users perms and bot mistakes */
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Haha, you dont have the perms!")
    if (!member) return message.channel.send("Bruh, are you stupid? Check ur command and try again.");
    if (!reason) { reason = "**No reason provided**" }

    /**Also some failsafes */
    if (message.mentions.has(client.user)) return message.channel.send("You cant ban a bot!")
    if (member.roles.highest.position > message.member.roles.highest.position) return message.channel.send("Lol, you cant ban someone with more power")
    if (member.roles.highest.position == message.member.roles.highest.position) return message.channel.send("You cant ban someone with equal powers")

    /**Bans the user with reason*/
    member.ban({ reason: reason, days: 7 })
    message.channel.send(`**${member.user.tag}** has been beaned for **${reason}**`)
}

exports.help = {
    name: "ban"
}
