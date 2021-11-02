const hangman = require('discord-hangman');
exports.run = async (client, message, args) => {

    await hangman.create(message.channel, 'random')
}

exports.help = {
    name: "hangman.random"
}