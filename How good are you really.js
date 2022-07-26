/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!*/


function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classAverage = 0;
  for (let i = 0; i < classPoints.length; i++){
    classAverage += classPoints[i]; 
  }
  classAverage = classAverage/classPoints.length; 
  if(yourPoints > classAverage){
    return true
  }else{
    return false
  }
  }