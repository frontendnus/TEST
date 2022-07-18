// ? FUNCTION
function describeCountry(country, population, capitalCity) {
  return `${country} has ${Math.floor(
    population / 1000_000
  )} million people and it's capital city is ${capitalCity}`;
}
const descIndonesia = describeCountry("Indonesia", 7470876, "Semarang");
const descJapan = describeCountry("Japan", 3210976, "Tokyo");
console.log(descIndonesia, descJapan);

// ? DIFFERENT FUNCS
let worldPopulation = 7900; // in million
function percentageOfWorld1(population) {
  return +((population / worldPopulation) * 100).toFixed(2);
}
const percentPopulationIndo = percentageOfWorld1(12);
console.log(`${percentPopulationIndo}% of world population`);

const percentageOfWorld2 = function (population) {
  return +((population / worldPopulation) * 100).toFixed(2);
};
const percentPopulationKorea = percentageOfWorld1(5.4);
console.log(`${percentPopulationKorea}% of world population`);

const percentageOfWorld3 = (population) =>
  +((population / worldPopulation) * 100).toFixed(2);
const percentPopulationJapan = percentageOfWorld1(8.1);
console.log(`${percentPopulationJapan}% of world population`);

// ? FUNC CALL FUNC
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )}% of the world`;
};
console.log(describePopulation("China", 1441));

// ? ARRAY
const populations = [17, 9.6, 3.45, 5];
console.log(populations.length === 4);
const percentages = [];
populations.forEach((value) => {
  percentages.push(percentageOfWorld1(value));
});
console.log(percentages);

const neighbours = ["Singapore", "Malaysia", "Australia"];
neighbours.push("Utopia");
neighbours.pop();
if (neighbours.includes("Germany")) {
  console.log("Centrsal European Country");
} else {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Singapore")] = "Timor Leste";
console.log(neighbours);

// ? OBJECT
const myCountry = {
  country: "Indonesia",
  capital: "Jakarta",
  language: "Javanese",
  population: 273.5,
  neighbours: ["Malaysia", "Singapore", "Australia"],
  describe() {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours.length > 0 ? true : false;
  },
};

myCountry;
myCountry.population += 5;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

//! LOOPING
for (let i = 0; i < 50; i++) {
  console.log(`Voter number ${i + 1} is currently voting`);
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const element = populations[i];
  percentages2[i] = percentageOfWorld1(element);
}
console.log(percentages2);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  const neighbours = listOfNeighbours[i];
  console.log(neighbours);
  for (let j = 0; j < neighbours.length; j++) {
    const neighbour = neighbours[j];
    console.log(`Neighbour: ${neighbour}`);
  }
}
