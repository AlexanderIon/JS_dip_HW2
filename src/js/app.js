
const  {Character,Game, readGameSaving:loadGame, writeGameSaving:saveGame,} = require('./game')
const herrou =new  Character('Hirow_One')
const game = new Game();
game.start();
console.log(herrou.name)
