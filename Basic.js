const country = "Indonesia";
const continent = "Asia";
let population = 7_670_418;
let average = 33_000_000;

const isIsland = true;
let language;
language = "Indonesia";

const halfPopulation = population / 2;
let moreFromFinland = population > 6_000_000;
const lessThanAvg = population < average;

if (!lessThanAvg) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${Math.abs(
      Math.ceil((average - population) / 1000000)
    )} million below average`
  );
}

console.log(
  `${country} is in ${continent} and its ${Math.floor(
    population / 1000000
  )} million people speak ${language}`
);

// ? Type Conversion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// ? Equality Operator
/*
const numNeighbours = parseInt(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

if (language === "English" && population < 50_000_000 && !isIsland) {
  console.log("You should live in Indonesia");
} else {
  console.log("Indonesia doesn't meet your criteria");
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("Most number of ");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("4th place");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
    break;
}

const popTernary = population > average ? "above average" : "below average";
console.log(`Indonesian's populaiton is ${popTernary}`);
