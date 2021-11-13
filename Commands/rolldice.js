
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "rolldice",
	description: "rolls a dice!",
    async run(message, args, client) {
    if (message.content.toLowerCase().includes("dice")) {
        var response = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)];

        message.channel.send("**You rolled... **" + response + "!").then().catch(console.error);  // "You got... (1 - 6)!"
    }
    }
})

