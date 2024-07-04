# Grid Layout Calculator

The Grid Layout Calculator is a web application designed to help users calculate the dimensions of a tile grid layout. This tool can accept inputs for tile width, grout joint size, and a modifier. It also provides the capability to convert fractional and decimal inputs into precise measurements, including special handling for measurements with a plus symbol representing additional 64ths.

## Features

- Accepts tile width in inches and fractions (e.g., `38 5/16`).
- Accepts grout joint size and modifier in fractions or decimals (e.g., `1/16` or `0.0625`).
- Handles plus symbols in inputs to represent additional 64ths. (e.g., 5 1/16+)
- Calculates the total width of a grid layout based on the provided inputs.
- Displays the results in a readable format, including whole numbers, fractions, and additional 64ths depicted as plus symbols.

## Getting Started

### Prerequisites

To run the Grid Layout Calculator, you need a basic web server setup or any platform that can serve HTML and JavaScript files (e.g., WordPress with custom JS/CSS capability).

### Installation

1. **HTML File**: Save the following HTML content into a file named `layout.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Grid Layout Calculator</title>
       <link rel="stylesheet" href="layout.css" />
     </head>
     <body>
       <h1>Layout Calculator</h1>
       <div id="inputSection">
         <label for="tileWidth">Tile Width (inches and fraction, e.g., 38 5/16):</label>
         <input id="tileWidth" type="text" placeholder="e.g., 38 5/16" />

         <label for="groutJointSize">Grout Joint Size (fraction or decimal):</label>
         <input id="groutJointSize" type="text" placeholder="e.g., 1/16 or 0.0625" />

         <label for="modifier">Modifier (fraction or decimal):</label>
         <input id="modifier" type="text" placeholder="e.g., 1/4 or 0.25" />

         <label for="numTiles">Number of tiles in width of grid:</label>
         <input id="numTiles" type="number" />

         <label for="numGrids">Number of Grids:</label>
         <input id="numGrids" type="number" />

         <button id="calculateButton">Calculate</button>
       </div>
       <div id="resultSection">
         <h2>Results</h2>
         <div id="results"></div>
       </div>
       <script src="layout.js"></script>
     </body>
   </html>
