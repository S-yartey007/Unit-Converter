function convertLength(value, from, to) {
  if (isNaN(value)) {
    return null;
  }
  const conversions = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  };
  return value * (conversions[from] / conversions[to]);
}

function convertWeight(value, from, to) {
  const conversions = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592,
  };
  return value * (conversions[from] / conversions[to]);
}

function convertTemperature(value, from, to) {
  if (from === to) return value;
  value = parseFloat(value);
  if (from === "Celsius" && to === "Kelvin") {
    return value + 273.15;
  } else if (from === "Celsius" && to === "Fahrenheit") {
    return value * (9 / 5) + 32;
  } else if (from === "kelvin" && to === "Fahrenheit") {
    return (value - 273.15) * (9 / 5) + 32;
  } else if (from === "Fahrenheit" && to === "Celsius") {
    return (value - 32) * (5 / 9);
  } else if (from === "Fahrenheit" && to === "Kelvin") {
    return (value - 32) * (5 / 9) + 23.15;
  } else if (from === "Kelvin" && to === "Celsius") {
    return value - 273.15;
  }
}

export { convertLength, convertTemperature, convertWeight };
