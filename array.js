// Array Declaration
const friends = ['Su Su','Mya Mya','Yi Yi'];
console.log(friends,friends.length);
// or just for knowledge
const friendsList = new Array('Su Su','Mya Mya','Yi Yi');
console.log(friendsList[0],friendsList.length);

const fullName = 'Gi Gi'
const personalData = [fullName,2022 - 1996,friends,'Developer',false]
console.log(personalData)


const calAge = function(birthYear){
    return 2022 - birthYear;
}

const years = ['1990','1998','1996','2000','2002']
const ages = [calAge(years[0]),calAge(years[1]),calAge(years[2]),calAge(years[3]),calAge(years[years.length - 1])];
console.log(ages);