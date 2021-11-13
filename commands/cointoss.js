const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "cointoss",
	description: "flips a coin!",
    async run(message, args, client) {
    
    
    function GoCoin(){
        var rand = ['Heads', 'Tails', 'Coin lost', 'Coin stuck half way and did not fall']
        return rand[Math.floor(Math.random() * rand.length)];
    }
    return message.reply(GoCoin());
    }
})
