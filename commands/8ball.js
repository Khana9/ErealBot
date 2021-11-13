const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "8ball",
	description: "8ball from the bot",
    async run(message, args, client) {

    function Go8Ball(){
        var rand = ['Yes', 'No', 'Why are you even trying?', 'Find the answer on your own yeesh, loser.']
        return rand[Math.floor(Math.random() * rand.length)];
    }
    return message.reply(Go8Ball());
    } 
})

