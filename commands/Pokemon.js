const { Pokemon } = require('djs-games')
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "pokemon",
	description: "Guess the pokemon!",
    async run(message, args, client) {
const game = new Pokemon({
  message: message,
  token: 'TOKEN', 
  winMessage: 'You Win!',
  loseMessage: 'You Lose!',
  wrongGuess: 'Wrong Guess!',
  stopCommand: 'stop',
  maxAttempts: 10,
})
game.start()
    }
    })
