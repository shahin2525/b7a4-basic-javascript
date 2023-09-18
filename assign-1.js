//    problem 1 (mindGame)
function mindGame(number) {
  const multiple3 = number * 3;
  const add10 = multiple3 + 10;
  const divison2 = add10 / 2;
  const subtract5 = divison2 - 5;
  return subtract5;
}
// const subtract = mindGame(5);
// console.log(subtract);

// problem 2 Finding even or odd

function evenOdd(name) {
  const totalCracter = name.length;

  if (totalCracter % 2 == 0) {
    return "even";
  } else {
    totalCracter % 2 !== 0;

    return "odd";
  }
}
// const total = evenOdd("Phero");
// console.log(total);

// problem 3 isLGSeven

function isLGSeven(number) {
  const subtract7 = number - 7;
  if (subtract7 < 7) {
    return subtract7;
  } else {
    subtract7 >= 7;
    return subtract7 * 2;
  }
}
// const returnNumber = isLGSeven(10);
// console.log(returnNumber);

// problem 4 findingBadData

const ageNumbers = [-4, -9, -5, -33, -55];

function findingBadData(ages) {
  let negativeValue = [];
  for (let i = 0; i < ages.length; i++) {
    const element = ages[i];

    if (element < 0) {
      negativeValue.push(element);
    }
  }
  return negativeValue.length;
}
const negative = findingBadData(ageNumbers);
console.log(negative);
