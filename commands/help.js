const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "help",
	description: "lists the commands for the bot",
    async run(message, args, client) {
    
        let embed = new MessageEmbed()
        .setTitle("Command List")
        .setDescription(`**-help:**\nThis command.\n**-rolldice:**\nRolls a dice\n**-hangman.(custom.random):**\nStarts a custom/random hangman game\n**-hello:**\nReplies with hello :)\n**-bye:**\nReplies with goodbye!\n**-kms:**\nGives you a quick tip :D\n**-meme:**\nSends a meme\n**-ping**\nGives the bot latency\n**-yo**\nReplies to you\n**-T**\nYou MUST say the truth....\n**MODERATOR COMMANDS:**\n**-kick:**\nKicks a user\n**-ban**\nBans a user\n**-mute**\nMutes a user`)
        .setColor("RANDOM")
        message.channel.send({ embeds: [embed] })

    }

})