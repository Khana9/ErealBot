exports.run = async (client, message, args) => {
    let member = message.mentions.members.first();
    
    if (!member) { message.channel.send("hello"); } else {
        message.lineReply(`Heya @${member.user.tag}`)
    }
}

exports.help = {
    name: "hello"
}
