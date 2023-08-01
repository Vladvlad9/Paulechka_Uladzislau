
function getLetters(data: string): number{
    const letters: string[] = ["а", "и", "е", 'ё', "о", "у", "ы", "э", "ю", "я"]
    let count: number = 0
    const getData: string[] = data.split('')

    for(let i: number = 0; i < getData.length; i++){
        if(getData[i] in letters){
            count += 1
        }
    }
    return count
}
const result = getLetters("привет как дела")
console.log(result)
