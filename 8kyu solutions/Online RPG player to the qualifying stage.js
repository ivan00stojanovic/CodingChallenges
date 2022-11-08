/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!*/

function playerRankUp (points) {
  if(points>=100){
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  }else{
    return false
  }
}