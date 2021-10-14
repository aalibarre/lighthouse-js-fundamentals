const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {

  let firstPosition = [];
  let x = 0; 
  let y = 0;
  for (let position of moves) {
    if (position === "north") {
      y = y + 1; 
    } else if (position === "south") {
      y = y - 1; 
    } else if (position === "east") {
      x = x + 1; 
    } else if (position === "west") {
      x = x - 1;
    } 
  }
  firstPosition.push(x,y)
  return firstPosition;
}
console.log(finalPosition(moves));

