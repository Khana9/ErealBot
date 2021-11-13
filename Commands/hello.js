const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "hello",
	description: "says Hello!",

	async run(message, args, client) {
		message.reply("Hello!");
	}
});
