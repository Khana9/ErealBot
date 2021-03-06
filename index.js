/**Start of index.js */

console.clear();
require('dotenv').config()

const mongoose = require('mongoose');
const Client = require("./Structures/Client.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config.json");
const Command = require("./Structures/Command.js");
const client = new Client();
const fs = require("fs");
	/**Import the commmands folder */
fs.readdirSync("./commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./commands/${file}`);
		console.log(`Command ${command.name} loaded`);
		client.commands.set(command.name, command);
	});




	/**This will let us know when the bot is ready */
    client.on("ready", () => console.log("Bot is ready!"));




client.on("messageCreate", message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return;

	command.run(message, args, client);
});

// This will DM new members
client.on("guildMemberAdd", async (member) => {
    let embed = new MessageEmbed()
      
      /** Description */ 
      .setTitle("Welcome to the server!")
      .setDescription(`Thanks for joining the server! Make sure to read the rules at #rules! :flushed:\n**Current Member Count:** ${member.guild.memberCount}\n**Check out the contributers here:** https://github.com/Khana9/Ereal/graphs/contributors`)
      .setColor("#cc3300")
      .setFooter(member.guild.name, member.guild.iconURL())
      .setThumbnail(member.user.avatarURL());
  
    member.send({ embeds: [embed] })
	.catch(() => message.reply("Can't send DM to your user!"));
  })

client.login(config.token);
