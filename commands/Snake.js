const { Snake } = require('djs-games')
const Command = require("../Structures/Command.js");
module.exports = new Command({
  name: "Snake",
  description: "Play the classic snake game!",
  async run(message, args, client) {
   message: message,
  buttons: true,
  snake: '🟩',
  apple: '🍎',
  embedColor: 'RANDOM',
  leftButton: '◀',
  rightButton: '▶',
  upButton: '▲',
  downButton: '▼',
})
game.start()
  },
});
