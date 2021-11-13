const { RockPaperScissors } = require('djs-games')
const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "RPS",
  description: "Play Rock Paper Scissors!",
  async run(message, args, client) {
 const { RockPaperScissors } = require('djs-games')
const game = new RockPaperScissors({
  message: message,
})
game.start()
  },
});
