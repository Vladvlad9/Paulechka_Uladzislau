function getCentury(year) {
    return Math.floor(year / 100) + 1;
}

let yar = prompt("Введите год");
while(isNaN(yar) || yar == null || yar == ""){
    yar = Number(prompt("Введите год"));
}

alert(`${yar} год - ${getCentury(yar)} век`)