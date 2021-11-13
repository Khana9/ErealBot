const { GTL } = require('djs-games')
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "GLogo",
	description: "Guess the logo game!",
    async run(message, args, client) {
const game = new GTL({
  message: message,
  token: 'dagpi-token-here', // *Required!! Get Your Api Token at https://dagpi.xyz/dashboard
  stopCommand: 'stop', // *Required!!
  winFooter: 'You Win!', // Set The Footer of the win message
  winColor: 'GREEN', // The embed color of the win message
  loseFooter: 'You Lose!', // Set The Footer of the lose message
  loseColor: 'RED', // The embed color of the lose message
  questionFooter: 'Guess the Logo!', // Set The Footer of the question message
  questionColor: 'BLUE', // The embed color of the question message
  maxAttempts: 5, //
})
game.start()
    }
    })
