exports.run = async (client, message, args) => {

    
    
    /**This gets the members from the server */
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let reason = args.slice(1).join(" ");  
    
    
    /**This checks for permissions and other errors */
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Haha, you dont have the perms!")
    if (!member) return message.channel.send("Bruh, are you stupid? Check ur command and try again.")
    if (!reason) { reason = "No reason provided" }


    /**Checks if u try to ban someone u cant */
    if (message.mentions.has(client.user)) return message.channel.send("You cant kick a bot!")
    if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("Lol, you cant ban someone with more power")


    /**Kicks the member with message */
    member.kick(reason)
    message.channel.send(`**${member.user.tag}** has been yeeted for **${reason}**`)
}

exports.help = {
    name: "kick"
}
