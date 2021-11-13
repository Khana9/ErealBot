const { Pokemon } = require('djs-games')
const Command = require("../Structures/Command.js");
const config = require("./config.json");

module.exports = new Command({
	name: "pokemon",
	description: "Guess the pokemon!",
    async run(message, args, client) {
const game = new Pokemon({
  message: message,
  token: config.dj-token, 
  winMessage: 'You Win!',
  loseMessage: 'You Lose!',
  wrongGuess: 'Wrong Guess!',
  stopCommand: 'stop',
  maxAttempts: 10,
})
game.start()
    }
    })
