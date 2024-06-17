const groutJoints = [
  0.015625, 0.03125, 0.0625, 0.125, 0.1875, 0.25, 0.375, 0.5,
];
const thinsetBuildUps = [
  0.015625, 0.03125, 0.0625, 0.125, 0.1875, 0.25, 0.375, 0.5,
];

function fracToDec(wholeNumber, fraction) {
  const indexOfVinculum = fraction.indexOf("/");
  const numerator = parseFloat(fraction.substring(0, indexOfVinculum).trim());
  const denominator = parseFloat(
    fraction.substring(indexOfVinculum + 1).trim()
  );
  const decimal = numerator / denominator;

  return parseFloat(wholeNumber) + decimal;
}

function decimalToTapeMeasureFraction(decimal) {
  const denominators = [2, 8, 16];

  const wholeNumber = Math.floor(decimal);
  const decimalPart = decimal - wholeNumber;

  function findClosestLowerFraction(decimalPart, denominators) {
    let closestFraction = null;
    let minDifference = Number.MAX_VALUE;

    for (let denom of denominators) {
      const numerator = Math.floor(decimalPart * denom);
      const fractionValue = numerator / denom;
      const difference = decimalPart - fractionValue;

      if (difference >= 0 && difference < minDifference) {
        minDifference = difference;
        closestFraction = { numerator, denom, fractionValue };
      }
    }

    return closestFraction;
  }

  const fraction = findClosestLowerFraction(decimalPart, denominators);
  const remainingDecimal = decimalPart - fraction.fractionValue;
  const plusCount = Math.floor(remainingDecimal / (1 / 64));

  function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = gcd(numerator, denominator);
    return {
      numerator: numerator / commonDivisor,
      denominator: denominator / commonDivisor,
    };
  }

  const simplifiedFraction = simplifyFraction(
    fraction.numerator,
    fraction.denom
  );
  const resultWholeNumber =
    wholeNumber +
    Math.floor(simplifiedFraction.numerator / simplifiedFraction.denominator);
  const resultNumerator =
    simplifiedFraction.numerator % simplifiedFraction.denominator;
  const resultDenominator = simplifiedFraction.denominator;

  let fractionString = "";
  if (resultNumerator !== 0) {
    fractionString = `${resultNumerator}/${resultDenominator}`;
  }

  if (plusCount > 0) {
    fractionString += "+".repeat(plusCount);
  }

  if (resultWholeNumber === 0 && fractionString === "") {
    return "0";
  } else if (resultWholeNumber === 0) {
    return fractionString;
  } else if (fractionString === "") {
    return `${resultWholeNumber}`;
  } else {
    return `${resultWholeNumber} ${fractionString}`;
  }
}

function storyStick() {
  const wholeNumber = document.getElementById("widthId").value;
  const fraction = document.getElementById("fractionId").value;
  const selectedJointIndex = parseInt(
    document.getElementById("groutJointId").value
  );
  const selectedThinsetIndex = parseInt(
    document.getElementById("thinsetId").value
  );
  const thinsetInterval = parseInt(
    document.getElementById("thinsetInterval").value
  );
  const tileCount = parseInt(document.getElementById("numberOfTilesId").value);

  const measurementDecimal = fracToDec(wholeNumber, fraction);
  const tileWidth = measurementDecimal;
  const groutJoint = groutJoints[selectedJointIndex];
  const thinsetBuildUp = thinsetBuildUps[selectedThinsetIndex];

  let accumulatedMeasurement = 0;

  for (let i = 1; i <= tileCount; i++) {
    accumulatedMeasurement += tileWidth + groutJoint;

    if (i % thinsetInterval === 0) {
      accumulatedMeasurement += thinsetBuildUp;
    }

    const result = decimalToTapeMeasureFraction(accumulatedMeasurement);
    console.log(result);
  }
}

document
  .getElementById("calculateButton")
  .addEventListener("click", storyStick);
