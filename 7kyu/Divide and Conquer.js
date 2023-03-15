/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number. */

function divCon(x){
    let sumArr = x.filter(nums => typeof nums === 'number')
      let deficitArr = x.filter(char => typeof char === 'string')
      let deficitArrNum = deficitArr.map(int => parseInt(int))
        let sum = sumArr.reduce((acc,cur) => acc + cur, 0)
        let deficit = deficitArrNum.reduce((acc,cur) => acc + cur, 0)
          return sum-deficit
    }