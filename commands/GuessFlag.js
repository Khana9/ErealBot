const { GTF } = require("djs-games");

const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "Gflag",
  description: "Guess the flag game!",
  async run(message, args, client) {
    const game = new GTF({
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
