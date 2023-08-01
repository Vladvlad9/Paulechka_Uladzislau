
function getLetters(data){
    const letters = ["а", "и", "е", 'ё', "о", "у", "ы", "э", "ю", "я"];
    let count = 0;

    const getData = data.toLowerCase().split('')

    for(let i = 0; i < getData.length; i++){
        if(letters.includes(getData[i])){
            count +=1;
        }
    }
    console.log(count);
    return count;
}

function getCountLetters(data){
    const letters = ["а", "и", "е", 'ё', "о", "у", "ы", "э", "ю", "я"]
    let countLetters = {}
    let result = ""

    const dataSplit = data.toLowerCase().split('')
    for(let i = 0; i < dataSplit.length; i++){
        if(letters.includes(dataSplit[i])){
            if(countLetters[dataSplit[i]])
                countLetters[dataSplit[i]] += 1
            else
                countLetters[dataSplit[i]] = 1
        }
    }
    for(const key in countLetters){
        result += `символ: ${key} - ${countLetters[key]}\n`
    }
    return result
}

const data = "ПрИвет мир"
const resultLetters = getLetters(data)
const resultCountLetters = getCountLetters(data)

console.log(`кол-во русских гласных в "${data}" : ${resultLetters} \n${resultCountLetters}`)
