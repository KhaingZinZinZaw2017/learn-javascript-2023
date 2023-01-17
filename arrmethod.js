const friends = ['Gi Gi','Su Su', 'Thu Thu'];
// to add data at last use push()
friends.push('Yi Yi');
console.log(friends);

// to add value at first of array use unshift()
friends.unshift('Han Ni');
console.log(friends);

// to remove last data from array use PopStateEvent()
friends.pop();
const popResult = friends.pop();
console.log(friends);
console.log(popResult);

// to remove first data from array use PopStateEvent()
friends.shift();
console.log(friends);

// indexOf return index of value
console.log(friends.indexOf('Su Su'));
// indexof same as includes but a little different
// includes returns true or false
console.log(friends.includes('Su Su'));
console.log(friends.includes('Zzz'));