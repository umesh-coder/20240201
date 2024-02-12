/**
 * @author Umesh
 * Problem Statement : To Make a firefly that is inside the box and its recuvrsively moving inside .
 * the box
 */


// Define the width of the console display
const width = 50;

// Define the height of the console display
const height = 30;



/**
 * @function firefly Creates a moving firefly effect on the console
 * @param {Number} width 
 * @param {Number} height 
 * @param {Number} moves 
 */

async function firefly_move(width, height, moves) {

  // Initialize the starting row and column of the star at random positions
  let firefly_row = Math.floor(Math.random() * height);
  let firefly_Column = Math.floor(Math.random() * width);

  // Loop through the specified number of moves
  for (let move = 0; move < moves; move++) {
    // Clear the console display
    console.clear();

    // Loop through each row of the console display
    for (let i = 0; i < height; i++) {
      let row = ''; // Initialize an empty row string

      // Loop through each column of the current row
      for (let j = 0; j < width; j++) {
        // Add the appropriate character to the row string based on the position
        if ((i === 0 || i === height - 1) && (j === 0 || j === width - 1)) {
          row += '+'; // Top-left and bottom-right corners
        } else if (i === 0 || i === height - 1) {
          row += '_'; // Top and bottom borders
        } else if (j === 0 || j === width - 1) {
          row += '|'; // Left and right borders
        } else {
          row += (i === firefly_row && j === firefly_Column) ? '*' : ' '; // Star or space
        }
      }

      // Log the current row string to the console display
      console.log(row);
    }

    // Move the firefly to a new random position
    firefly_row = Math.floor(Math.random() * height);
    firefly_Column = Math.floor(Math.random() * width);

    // Wait for 300 milliseconds before making the next move
    await sleep(300);
  }
}


/**
 * @function sleep is used to manage time after each iteration
 * @param {Number} ms 
 * @returns Promise
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Call the firefly_move function with the specified width, height, and number of moves
(async () => {
  await firefly_move(width, height, 500);
})();
