/* Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: 
 month 2 (February), is part of the first quarter; 
 month 6 (June), is part of the second quarter; 
 month 11 (November), is part of the fourth quarter. */


const quarterOf = (month) => {
  // Your code here

    //loop to return values 
    //  put conditionals first 
  if(month<=3 && month >= 1){
    return 1;
  }else if(month<=6 && month >= 4){
    return 2;
  }else if(month<=9 && month >= 7){
    return 3;
  }else if(month<=12 && month >= 10){
    return 4;
  }
  
  }