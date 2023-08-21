// https://www.codewars.com/kata/583df40bf30065fa9900010c
function getMean(arr, x, y) {
    if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
        return -1;
    }

    let firstSum = 0;
    for (let i = 0; i < x; i++) {
        firstSum += arr[i];
    }

    let firstMean = firstSum / x;

    let lastSum = 0;
    for (let i = arr.length - y; i < arr.length; i++) {
        lastSum += arr[i];
    }

  let lastMean = lastSum / y;

  return (firstMean + lastMean) / 2;
}
// console.log(getMean([1,3,2,4],2,3))

function addLength(str) {
    const array = str.split(' ')
    let lenStr = []
    for (let i = 0; i < array.length; i++) {
        lenStr.push(`${array[i]} ${array[i].length}`)
    }
    return lenStr
}
// console.log(addLength("apple ban"))

function count(array){
    let result = {}
    for(let key in array){
        if (array[key] in result)
            result[array[key]] += 1
        else
            result[array[key]] = 1
    }
    return result
}
// console.log(count(['james', 'james', 'john']))

function killer(suspectInfo, dead) {
  let killer = null;
  for (const suspect in suspectInfo) {
      const len = dead.length
    const seenPeople = suspectInfo[suspect];
    const seenCount = seenPeople.filter(person => dead.includes(person)).length;
    if (seenCount >= len) {
      killer = suspect;
      break;
    }
  }
  return killer;
}

// const suspectInfo = {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
//
// const dead = ['Lucas', 'Bill']
//
// const killers = killer(suspectInfo, dead);
//
// console.log(killers)

function maps(x){
    return x.map(key => key * 2)
}
// console.log(maps([1,4,1,2,5,1]))

function double(array) {
    let a = array.map(key => key * key)
    return a
}
// console.log(double([1,4,1,2,5,1]))


function  filterString(value) {
    let result = ''
    value.split('').filter(function (key) {
        if(parseInt(key))
            result += key
    })
    return result
}
// console.log(filterString('123'))


function toCamelCase(str){
    const splitString = str.split(/[-_]/)
    const filterWorld = splitString.filter(function (world, index) {
        return index === 0 || world === ''
    })

    const camelCaseWords = splitString.map(function(word, index) {
        if(/[A-Z]/.test(word))
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        if(index === 0){
            return word.toLowerCase()
        }else{
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
  });

    console.log(camelCaseWords.join(''))
    return camelCaseWords.join('')
}
// console.log(toCamelCase("The_Stealth_warrior"))


function search(budget, prices) {
    let b = []
    if(budget === 0){
        return " "
    }else {
        let result = prices.filter(function (key, index){
            if(budget >= key || key === 0){
                b.push(prices[index])
            }
        })

        let a = b.sort(function (a,b){
            return a - b
        })

        return b.toString()
        }

}
// const budget = 50
// const price = [0,2,5,24]
// console.log(search(budget, price))

function whoTookTheCarKey(message) {
    let result = ''
    for (let i of message) {
        result += String.fromCharCode(parseInt(i,2))
    }
    return result

}
// const arr = ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']
// console.log(whoTookTheCarKey(arr))

// function numberOfHooks(length, maxHookDist) {
//     if(maxHookDist >= length){
//         return 1
//     }
//     let numFullHookDists = Math.floor(length / maxHookDist);
//     let remainingDistance = length - numFullHookDists * maxHookDist;
//     if (remainingDistance < maxHookDist) {
//         numFullHookDists++;
//       }
//
//   return numFullHookDists;
// }
// const length = 255
// const maxHookDist = 45
// console.log(numberOfHooks(255, 45))

function maxlen(l1, l2) {
  let a = Math.floor((l1 + l2) / 3);

  console.log(a)
    return a
}
// console.log(maxlen(5,17))


function removeEveryOther(arr){
    let a = []
    arr.filter(function (v, i, arr){
      if (i % 2 === 1){
          a.push(v)
      }
  })
    console.log(a)
    return a
}
// const arr = ['Hello', 'Goodbye', 'Hello Again', 'Goodbye again']
// console.log(removeEveryOther(arr))

function array(string) {
    let result = ''
    const newStr = string.split(',')
    if(newStr.length === 1 || newStr.length === 0 || newStr.length === 2)
        return null

    for (let i = 0; i < newStr.length; i++){
        if(i === 0 || i === newStr.length-1)
            continue
        else
            result += newStr[i] + ' '
    }
    return result

}
const str = '1,2,3,4'
console.log(array(str))
