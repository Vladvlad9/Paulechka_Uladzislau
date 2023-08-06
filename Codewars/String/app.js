// Task 1
function stringy(size) {
    let result = ""
    console.log(size.length)
    for (let i = 0; i < size; ++i) {
        if (i%2 === 0) {
            result += '1'
        }else{
            result += '0'
        }
    }
    return result
}

// console.log(stringy(6))

// Task 2
// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
function capitalizeWord(word) {
    let getWorld = word.split('')
    let result = ''
    for (let i = 0; i < getWorld.length; i++) {
        result = (i === 0)? result += getWorld[i].toUpperCase() : result += getWorld[i];
    }
    return result
}
// console.log(capitalizeWord('hello'))

// Task 3
// https://www.codewars.com/kata/5865918c6b569962950002a1
function strCount(str, letter){
    const lowerLetters = letter.toLowerCase()
    const charStr = str.toLowerCase().split('');
    let count = 0;

    for (let i = 0; i < charStr.length; i++) {
        if(!charStr[i].indexOf(letter))
            count += 1;
    }

    return count
}
// console.log(strCount('hello', 'l'))

// Task 4
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
function makeUpperCase(str) {
    return str.toUpperCase()
}

// Task 5
// https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x){
    const dataNumber = String(x).split('');
    let getFakeBin = ''
    for (let i = 0; i < dataNumber.length; i++){
        (dataNumber[i] < 5) ? getFakeBin += 0 : getFakeBin += 1;
    }
    return getFakeBin
}
// console.log(fakeBin(4554988))

// Task 6
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
function smash (words) {
    let result = ''
    for (let i = 0; i < words.length; i++)
        (i === words.length - 1) ? result += words[i] : result += `${words[i]} `
    return result
}
const array = ['hello', 'world', 'my', 'name', 'is', 'Vlad']
console.log(smash(array))




function saleHotdogs(n){

  if(n < 5) return 100
  else if (n >= 5 && n < 10) return 95
  else return 90
}