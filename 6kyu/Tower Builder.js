/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] */

const towerBuilder = (n) => {
    let space = n-1;
    let stars = 1;
    let tower = [];
      for(let i = 0; i < n;i++){
        tower.push(  ' '.repeat(space) 
                   + '*'.repeat(stars)   
                   + ' '.repeat(space))
        stars += 2
        space -= 1
      }
          return tower
    }
  