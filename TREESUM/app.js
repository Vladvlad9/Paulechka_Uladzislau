function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        } else if (Array.isArray(array[i])) {
            sum += sumArray(array[i]);
        }
    }
    return sum;
}

const array = [5, 7, [ 4, [2], 8, [1,3], 2 ],[ 9, [] ], 1, 8];
const sum = sumArray(array);