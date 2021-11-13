const { GTL } = require('djs-games')
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "GLogo",
	description: "Guess the logo game!",
    async run(message, args, client) {
const game = new GTL({
  message: message,
  token: 'dj-token',
  stopCommand: 'stop',
  winFooter: 'You Win!',
  winColor: 'GREEN',
  loseFooter: 'You Lose!',
  loseColor: 'RED',
  questionFooter: 'Guess the Logo!',
  questionColor: 'BLUE', 
  maxAttempts: 5, 
})
game.start()
    }
    })
