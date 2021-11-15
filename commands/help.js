const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "help",
	description: "lists the commands for the bot",
    async run(message, args, client) {
    
        let embed = new MessageEmbed()
        .setTitle("Command List")
        .setDescription(`**GENERAL COMMANDS::**\n**-help:**\nThis command.\n**-plshelp**\nNeed some help fast? Try this command!\n**-hello:**\nReplies with hello :)\n**-bye:**\nReplies with goodbye!\n**-kms:**\nGives you a quick tip :D\n**-ping**\nGives the bot latency\n**-yo**\nReplies to you\n**FUN COMMANDS :D**\n**-rolldice:**\nRolls a dice\n**-Pokemon**\nCan you guess that Pokemon?\n**-RPS**\nCan you beat da bot in Rock, Paper, Scissors...?\n**-Gflag**\nGuess the flag!\n**-Glogo**\nGuess the logo!\n**-connect4**\nPlay connect4 with your friends!\n**-T**\nYou MUST say the truth....\n**-meme:**\nSends a meme\n**MODERATOR COMMANDS::**\n**-kick:**\nKicks a user\n**-ban**\nBans a user\n**-mute**\nMutes a user`)
        .setColor("RANDOM")
        message.channel.send({ embeds: [embed] })

    }

})