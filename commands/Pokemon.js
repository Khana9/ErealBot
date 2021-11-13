const { Pokemon } = require('djs-games')
const Command = require("../Structures/Command.js");
require('dotenv').config()

module.exports = new Command({
	name: "pokemon",
	description: "Guess the pokemon!",
    async run(message, args, client) {
const game = new Pokemon({
  message: message,
  token: 'MTYzNjAxODA5Ng.QjGO5CRCiWoGM1FUktUkzq9wvU3bbFlz.e52e54e3ddc51799', 
  winMessage: 'You Win!',
  loseMessage: 'You Lose!',
  wrongGuess: 'Wrong Guess!',
  stopCommand: 'stop',
  maxAttempts: 10,
})
game.start()
    }
    })
