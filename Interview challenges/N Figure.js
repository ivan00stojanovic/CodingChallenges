/* IT Academy test 2 

4.
   Write the following figure for n parameter. In the following example n =5:
   1 2 3 4 5
   2 3 4 5 1
   3 4 5 1 2
   4 5 1 2 3
   5 1 2 3 4
  */


   function figure(n) {
      let result = []
      let firstArray = []
        for(let i  = 1; i <= n; i++){
          firstArray.push(i)
        }
      result.push([... firstArray])
          for(let i = 1; i < n; i++){
            firstArray.push(firstArray.shift())
            result.push([[...firstArray]])
          }
        
          return result
    }
    console.log(figure(5))

    