// add solution here

// indexes array "musicians" and array "instruments" and pushes it as a string into "storredArray"
<<<<<<< HEAD
function theBeatlesPlay(musicians, instruments) {
  var storedArray = []
  for (var i = 0; i < 4; i++) {
    storedArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }  
  
=======
function theBeatlesPlay (musicians, instruments) {
  
  var storedArray = [];
 
 
  for (var i = 0; i < 4; i++) {
  
    
   if (i === 0) {
    storedArray.push(`${musicians[0]} plays ${instruments[0]}`); 
  
    
  } else if (i === 1) {
    storedArray.push(`${musicians[1]} plays ${instruments[1]}`);
  
    
  } else if (i === 2) {
    storedArray.push(`${musicians[2]} plays ${instruments[2]}`);
  
    
  } else if (i === 3) {
    storedArray.push(`${musicians[3]} plays ${instruments[3]}`);
 
  }  
}
>>>>>>> 9b64e0eb4bc3486ff770b227c8b7f43119d3769b
  return storedArray
}



<<<<<<< HEAD
function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
  newFacts.push(facts[i] +'!!!')
  i++
}
 
 return newFacts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15)
 
  return love
=======
function johnLennonFacts (facts) {
 
 var n = 0
 while (n < 5){
  var f = 0
  var exclaim = ['!!!']
  facts[0].concat('', exclaim)
  n++
  f++
 }
 return facts
>>>>>>> 9b64e0eb4bc3486ff770b227c8b7f43119d3769b
}