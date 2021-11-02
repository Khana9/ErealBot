exports.run = async (client, message, args) => {
    
    /**This defines the member */
    let member = message.mentions.members.first();
    
    if (!member) { message.channel.send("Goodbye!"); } else {
        message.lineReply(`Goodbye! @${member.user.tag}`)
    }
}

exports.help = {
    name: "bye"
}