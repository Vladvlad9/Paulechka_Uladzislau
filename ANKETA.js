const fio = prompt("Введите ФИО")
const age = Number(prompt("Введите ваш возраст"))
const sex = confirm("Ваш пол - мужской?")


function get_fio(fio){
    if(fio == ""){
        return fio = "Фио не должно быть пустым";
    }
    return fio;
}

function get_sex(sex, age){
    let pension
    if(sex){
        if(age > 63)
            pension = "\nвы на пенсии: ДА"
        else 
            pension = "\nвы не на пенсии: Нет"
        return `Мужской ${pension}`
    }
    else
        if(age > 58)
            pension = "\nвы на пенсии: Нет"
        else 
            pension = "\nвы не на пенсии: Да"
        return `Женский ${pension}`
}



alert(`ваше ФИО: ${fio}\n
ваш возраст в годах: ${age}\n
ваш возраст в днях: \n
через 5 лет вам будет: ${age + 5}\n
ваш пол: ${get_sex(sex, age)}
`)
