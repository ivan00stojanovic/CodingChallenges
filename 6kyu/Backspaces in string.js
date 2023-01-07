/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  " */

function cleanString(s) {
    let arr = []
     let counter = 0
  for(let i = s.length-1; i>=0; i--){
    
    if(s[i] !== '#' && counter === 0){
        arr.unshift(s[i])
      }else if(s[i] === '#'){
        counter++
      }else if(s[i] !== '#' && counter>0){
        counter--
      }
  }
    return arr.join('')
}