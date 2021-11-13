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


