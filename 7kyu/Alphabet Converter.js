




function alphabetConvert(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arr = alphabet.split('')
    let result = ''

    for( char of arr
        ){
        if(typeof parseInt(char) === 'number') result += char
        result += arr.indexOf(char) + 1
    }
            return str
}


console.log(alphabetConvert('h3llo'), '8312120')
console.log(alphabetConvert('h3llo apple -!'), '83121215 11616125-!' )