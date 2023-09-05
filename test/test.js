function array(string) {
    let result = ''
    const newStr = string.split(',')
    if(newStr.length <= 2)
        return null

    for (let i = 0; i < newStr.length; i++){
        if(i === 0 || i === newStr.length-1)
            continue
        else
            result += newStr[i] + ' '
    }
    return result.slice(0,-1).length

}
const str = '1,2'
console.log(array(str))