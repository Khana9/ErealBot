const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "yo",
	description: "says yo!",

	async run(message, args, client) {
		message.reply("Yo, whassup!");
	}
});
