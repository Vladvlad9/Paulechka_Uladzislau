function isPalindrome(string){
    const lowerString = string.toLowerCase();
    let newStr = ''

    for (let i = 0; i < lowerString.length; i++) {
        let char = lowerString[i]
        if (char === ' ' || char === ',' || char === '.' || char === '!' ||
            char === '?' || char === ';' || char === ':' || char === '(' ||
            char === ')' || char === '-' || char === '_'){
          continue
        }

        if (char === 'ё')
          char = 'е'
        newStr += char
    }

  let reversedPhrase = newStr.split('').reverse().join('');

  return newStr === reversedPhrase;
}
console.log(isPalindrome('Она не жена, но...'))
