let fio = prompt("Введите ФИО");
while(fio == '' || fio == null){
    fio = prompt("Введите ФИО");
}

let age = prompt("Введите ваш возраст")
while(isNaN(age) || age == null || age == ""){
    age = Number(prompt("Введите ваш возраст"))
}

const sex = confirm("Ваш пол - мужской?")

function get_sex(sex, age){
    let pension;
    if(sex){
        pension = age > 63 ? "\nвы на пенсии: ДА" : "\nвы на пенсии: Нет";
        return `Мужской ${pension}`;
    }
    else
        pension = age > 58 ? "\nвы на пенсии: ДА" : "\nвы на пенсии: Нет";
        return `Женский ${pension}`;
}

alert(`ваше ФИО: ${fio}
ваш возраст в годах: ${age}
ваш возраст в днях: ${age * 365}
через 5 лет вам будет: ${age + 5}
ваш пол: ${get_sex(sex, age)}
`)
