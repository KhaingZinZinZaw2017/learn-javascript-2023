const arr1 = [17,21,23];
const arr2 = [12, 5, -5, 0, 4];
const printForecast = arr => {
    let str = '';
    for(let i=0;i<arr.length;i++){
        str += `${arr[i]}ºC in ${i+1} ${i !== 1? 'day' : 'days' }...`
    }
    console.log(str);
};
printForecast(arr2)
