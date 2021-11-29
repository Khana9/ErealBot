

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "kms",
	description: "A small motivational line :)",
    async run(message, args, client) {
    message.reply("If you are stuck, Dont worry! Take a break and drink some coffee :-)")
}
})