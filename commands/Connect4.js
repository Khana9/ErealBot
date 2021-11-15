const Command = require("../Structures/Command.js");
const { ConnectFour } = require('djs-games')
module.exports = new Command({
  name: "connect4",
  description: "Play connect 4!",
  async run(message, args, client) {
    const game = new ConnectFour({
      message: message,
      token: "",
      stopCommand: "stop",
      winFooter: "You Win!",
      winColor: "GREEN",
      loseFooter: "You Lose!",
      loseColor: "RED",
      questionFooter: "Guess the Flag!",
      questionColor: "BLUE",
      winMessage: "You Win!",
      loseMessage: "You Lose!",
      maxAttempts: 5,
      wrongGuess: "Wrong Guess!",
    });
    game.start();
  },
});
