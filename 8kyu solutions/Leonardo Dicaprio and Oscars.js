/* You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!" */



function leo(oscar){
    let oscarObj = {
      86: 'Not even for Wolf of wallstreet?!',
      87: 'When will you give Leo an Oscar?',
      88: "Leo finally won the oscar! Leo is happy",
      89: 'Leo got one already!'
    }
    
        return oscar === 88 ? oscarObj[oscar]
        :      oscar === 86 ? oscarObj[oscar]
        :      oscar > 88 ? oscarObj[89]
        : oscarObj[87]
}