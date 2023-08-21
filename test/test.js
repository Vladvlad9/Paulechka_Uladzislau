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