const { TicTacToe } = require('djs-games')


const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "TTT",
  description: "Play TicTacToe!",
  async run(message, args, client) {
   const game = new TicTacToe({
  message: message,
  xEmote: '❌',
  oEmote: '0️⃣', 
  xColor: 'PRIMARY',
  oColor: 'PRIMARY',
  embedDescription: 'Tic Tac Toe', 
})
game.start()
  },
});
