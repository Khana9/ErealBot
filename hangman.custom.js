const hangman = require('discord-hangman');
exports.run = async (client, message, args) => {
    
    await hangman.create(message.channel, 'custom')
    
}

exports.help = {
    name: "hangman.custom"
}