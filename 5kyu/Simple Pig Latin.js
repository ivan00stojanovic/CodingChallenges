function pigIt(str){
 let change = str.split(' ')
  for(let i = 0; i<change.length; i++){
    if(change[i] == '!' || change[i] == '.' || change[i] =='?'){
      change[i] = change[i]
    }else{
      change[i] += change[i][0] + 'ay'
      change[i] = change[i].substring(1) 
    }
  }
    return (change.join(' '))
    }
