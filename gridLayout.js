document
  .getElementById("calculateButton")
  .addEventListener("click", calculateGrid);

function calculateGrid() {
  const tileWidthInput = document.getElementById("tileWidth").value;
  const tileWidth = parseInchesAndFraction(tileWidthInput);
  const groutJointSize = parseFraction(
    document.getElementById("groutJointSize").value
  );
  const modifier = parseFraction(document.getElementById("modifier").value);
  const numTiles = parseInt(document.getElementById("numTiles").value);
  const numGrids = parseInt(document.getElementById("numGrids").value);

  const tileSize = tileWidth + groutJointSize + modifier;
  const totalSize = tileSize * numTiles;

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for (let i = 1; i <= numGrids; i++) {
    const gridSize = totalSize * i;
    const result = decimalToTapeMeasureFraction(gridSize);
    const resultElement = document.createElement("p");
    resultElement.textContent = `Grid ${i}: ${result}`;
    resultsDiv.appendChild(resultElement);
  }
}

function parseFraction(fraction) {
  if (!fraction) return 0;
  const [numerator, denominator] = fraction.split("/").map(Number);
  return numerator / denominator;
}

function parseInchesAndFraction(input) {
  if (!input) return 0;
  const parts = input.split(" ");
  let inches = 0;
  let fraction = 0;
  if (parts.length === 2) {
    inches = parseFloat(parts[0]);
    fraction = parseFraction(parts[1]);
  } else if (parts.length === 1) {
    if (parts[0].includes("/")) {
      fraction = parseFraction(parts[0]);
    } else {
      inches = parseFloat(parts[0]);
    }
  }
  return inches + fraction;
}

function decimalToTapeMeasureFraction(decimal) {
  const wholeNumber = Math.floor(decimal);
  const fractionPart = decimal - wholeNumber;

  const closestFraction = findClosestFraction(fractionPart);
  const remainingDecimal = fractionPart - closestFraction.value;
  const plusCount = Math.floor(remainingDecimal / (1 / 64));

  const fractionString =
    closestFraction.numerator === 0
      ? ""
      : `${closestFraction.numerator}/${closestFraction.denominator}`;
  const plusString = "+".repeat(plusCount);

  return `${wholeNumber} ${fractionString}${plusString}`.trim();
}

function findClosestFraction(decimal) {
  const denominators = [16];

  let closest = { numerator: 0, denominator: 1, value: 0 };

  for (let denom of denominators) {
    const numerator = Math.floor(decimal * denom);
    const value = numerator / denom;
    if (Math.abs(value - decimal) < Math.abs(closest.value - decimal)) {
      closest = { numerator, denominator: denom, value };
    }
  }

  return simplifyFraction(closest.numerator, closest.denominator);
}

function simplifyFraction(numerator, denominator) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const commonDivisor = gcd(numerator, denominator);
  return {
    numerator: numerator / commonDivisor,
    denominator: denominator / commonDivisor,
    value: numerator / commonDivisor / (denominator / commonDivisor),
  };
}
