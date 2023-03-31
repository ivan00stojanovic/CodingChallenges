
/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

//goofy ahh solution
    function correct(string)
    {
    let result1 = string.replaceAll('0', 'O')
    let result2 = result1.replaceAll('5', 'S')
    let finalResult = result2.replaceAll('1', 'I')
      return finalResult
    }

//more optimal solution
function correct(string)
{
    return string.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
}