const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "goodbye",
	description: "says goodbye!",
    async run(message, args, client) {
    
    
    /**This defines the member */
    let member = message.mentions.members.first();
    
    if (!member) { message.channel.send("Goodbye!"); } else {
        message.lineReply(`Goodbye! @${member.user.tag}`)
    }
}

})