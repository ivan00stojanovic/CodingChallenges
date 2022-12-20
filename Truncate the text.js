/* Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
 to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string. */

function truncate(str, n){
    if(str.length > n){
       return str.slice(0, n-1) + '...'
    }else{-1
     return str
}
}

truncate("What I'd like to tell on this topic is:", 20) //= "What I'd like to te…"

truncate("Hi everyone!", 20) //= "Hi everyone!"