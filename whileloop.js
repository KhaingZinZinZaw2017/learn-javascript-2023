// let dice = Math.trunc((Math.random() * 6))+ 1;
// console.log(dice);
// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     // try without below code
//     dice = Math.trunc((Math.random() * 6))+ 1;
//     if(dice === 6) console.log('Loop is stop');
// }
// const birthYear = 2000;
// const age = birthYear => 2022 - birthYear
// console.log(age(birthYear));

// Example
const measureKelvin = () => {
    const measurement = {
        type : 'temp',
        unit : 'celcius',
        value : Number(prompt('Degree Delsius')),
        
    };
    console.table(measurement);//use to know value in variable
    const kelvin = measurement.value +273;
    return kelvin;
};
console.log(measureKelvin());
// console.warn(measureKelvin());//show warning
// console.error(measureKelvin());//show error
