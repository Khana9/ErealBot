
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ping",
	description: "Shows the ping of the bot!",
	async run(message, args, client) {
	
        message.reply(`Pong!, 🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
		
	}
});
