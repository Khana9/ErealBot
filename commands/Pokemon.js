const { Pokemon } = require('djs-games')
const game = new Pokemon({
  message: message,
  token: '',
  winMessage: 'You Win!',
  loseMessage: 'You Lose!',
  wrongGuess: 'Wrong Guess!',
  stopCommand = 'stop',
  maxAttempts: 10,
})
game.start()
