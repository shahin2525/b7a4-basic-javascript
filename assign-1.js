// //    problem 1 (mindGame)
// function mindGame(number) {
//   const multiple3 = number * 3;
//   const add10 = multiple3 + 10;
//   const divison2 = add10 / 2;
//   const subtract5 = divison2 - 5;
//   return subtract5;
// }
// // const subtract = mindGame(5);
// // console.log(subtract);

// // problem 2 Finding even or odd

// function evenOdd(name) {
//   const totalCracter = name.length;

//   if (totalCracter % 2 == 0) {
//     return "even";
//   } else {
//     totalCracter % 2 !== 0;

//     return "odd";
//   }
// }
// // const total = evenOdd("Phero");
// // console.log(total);

// // problem 3 isLGSeven

// function isLGSeven(number) {
//   const subtract7 = number - 7;
//   if (subtract7 < 7) {
//     return subtract7;
//   } else {
//     subtract7 >= 7;
//     return subtract7 * 2;
//   }
// }
// // const returnNumber = isLGSeven(10);
// // console.log(returnNumber);

// // problem 4 findingBadData

// const ageNumbers = [-4, -9, -5, -33, -55];

// function findingBadData(ages) {
//   let negativeValue = [];
//   for (let i = 0; i < ages.length; i++) {
//     const element = ages[i];

//     if (element < 0) {
//       negativeValue.push(element);
//     }
//   }
//   return negativeValue.length;
// }
// const negative = findingBadData(ageNumbers);
// console.log(negative);

// this is new code
// ------- //

//    problem 1 (mindGame)
function mindGame(number) {
  const multiple3 = number * 3;
  const add10 = multiple3 + 10;
  const division2 = add10 / 2;
  const subtract5 = division2 - 5;
  return subtract5;
}
// const subtract = mindGame(5);
// console.log(subtract);

// problem 2 Finding even or odd

function evenOdd(name) {
  const totalCharacter = name.length;

  if (totalCharacter % 2 == 0) {
    return "even";
  } else {
    totalCharacter % 2 !== 0;

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
// const negative = findingBadData(ageNumbers);
// console.log(negative);

// problem 5 gemsToDiamond)

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  const firstFriendDiamond = firstFriendGems * 21;
  const secondFriendDiamond = secondFriendGems * 32;
  const thirdFriendDiamond = thirdFriendGems * 43;
  const totalFriendsDiamond =
    firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

  if (totalFriendsDiamond > 1000 * 2) {
    const ourDiamond = totalFriendsDiamond - 2000;

    return ourDiamond;
  } else {
    totalFriendsDiamond < 1000 * 2;
    return totalFriendsDiamond;
  }
}
// const ourDiamond = gemsToDiamond(100, 5, 1);
// console.log(ourDiamond);
