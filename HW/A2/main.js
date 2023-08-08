function deleteSpaces(string){
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' && (i === 0 || i === string.length - 1))
            result += "$";
        else
            result += string[i];
  }
  return result;
}

let str = prompt('Введите строку: ');
let delSpace = deleteSpaces(str);
console.log('Новая строка: ' + delSpace);