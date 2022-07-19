const Mark = {
  weight: [78, 95],
  height: [1.69, 1.88],
};
const John = {
  weight: [92, 85],
  height: [1.95, 1.76],
};

const calcBMI = function (weight, height) {
  return weight / (height * height);
};

const markHigherBMI =
  calcBMI(Mark.weight[0], Mark.height[0]) >
  calcBMI(John.weight[0], John.height[0])
    ? true
    : false;
console.log(markHigherBMI);

console.log(
  `Mark's BMI (${calcBMI(Mark.weight[0], Mark.height[0]).toFixed(2)}) is ${
    markHigherBMI ? "higher" : "lower"
  } than John's (${calcBMI(John.weight[0], John.height[0]).toFixed(2)})`
);

//! CHALLENGE DOLPIN KOALA
const score = {
  dolphin: [97, 112, 101],
  koala: [109, 95, 106],
};

const calcAverage = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    sum += element;
  }
  return +(sum / data.length).toFixed(2);
};

score.avgDolphin = calcAverage(score.dolphin);
score.avgKoala = calcAverage(score.koala);

if (score.avgDolphin >= 100 || score.avgKoala >= 100) {
  if (score.avgDolphin > score.avgKoala) {
    console.log(`Dolphin wins`);
  } else if (score.avgDolphin < score.avgKoala) {
    console.log(`Koala wins`);
  } else {
    console.log("Draw");
  }
} else {
  console.log("Not reach minimum average");
}

//! TIP CHALLENGE
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const totalBill = calcTip(275) + 275;
