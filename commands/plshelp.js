<<<<<<< HEAD:commands/plshelp.js
const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "plshelp",
	description: "quickly helps you out, the easy way :O",
    async run(message, args, client) {
        
    message.reply("Sure, here you go!: https://www.dcu.ie/students/withdrawing-university")
    }     
})


=======
const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "plshelp",
	description: "quickly helps you out, the easy way :O",
    async run(message, args, client) {
        
    message.lineReply("Sure, here you go!: https://www.dcu.ie/students/withdrawing-university")
    }     
})


>>>>>>> c8574702ba0049f841d32383b00ee43b35487fe5:Commands/plshelp.js
/**Suggested by https://github.com/paulinaad2 */