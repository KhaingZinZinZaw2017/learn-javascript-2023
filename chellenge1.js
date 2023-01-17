// Coding chellenge 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const markBMI = massMark / (heightMark * heightMark);
// const johnBMI = massJohn / heightJohn ** 2;
// console.log(markBMI,johnBMI);

// if(markBMI > johnBMI){
//     console.log(`Mark is higher than john`);
// }else{
//     console.log(`John is higher than Mark`)
// }

// Arrow function

const calcAge = birthYear => 2022 - birthYear;
const age = calcAge(1996);
console.log(age);

// Arrow function

const retirement = birthYear => {
    const age = 2022 - birthYear;
    const retirementAge = 65 - age;
    return retirementAge;
}
console.log(retirement(1996));

// const calcAvarage = (a,b,c) => (a + b + c)/3;
// const scoreDolphin = calcAvarage(44,23,71);
// const scoreKolas = calcAvarage(65,54,49);
// console.log(scoreDolphin,scoreKolas);

// const checkWinner = (avgDolphin,avgKoalas) =>{
//     if(avgDolphin >= avgKoalas * 2){
//         console.log(`Dolphin win (${avgDolphin} vs ${avgKoalas})`);
//     }else if(avgKoalas >= avgDolphin *2){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphin})`);
//     }else{
//         console.log(`Both lost`);
//     }
// }
// checkWinner(scoreDolphin,scoreKolas);

