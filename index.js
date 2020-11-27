var readlineSync = require('readline-sync')

var score = 0

var userName = readlineSync.question('Whats ur name? ')

console.log('Welcome '+userName.toUpperCase() + ' Do you know Mahendra? ')

function play(question, answer) {

  var userAns = readlineSync.question(question + ' OR enter e to exit!')

  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    console.log('you right')
    score++;
  }else if(userAns === "e"){
     return userAns;
  }
  else
  {
    console.log('you wrong')
  }

  console.log('current score: ', score)
  console.log('********************************************')
}




var questions = [ {
  question : "Am i more than 25? ",
  answer : "no"
},
{
  question : "where do i study? ",
  answer : "parul"
} , 
{
  question : "Does he love developing? ",
  answer : "yes"
},
{ question : "Favourite Actress? ",
  answer : "Jennifer Aniston"
},
{
  question : "Does he likes gaming? ",
  answer : "yes"
} ]


var i =0

do{
   var currentQuestion = questions[i]
userAns = play(currentQuestion.question, currentQuestion.answer)
i++;

}while(userAns!== "e" && i<questions.length)

// for(var i=0; i<questions.length; i++){
 
  
// }

console.log("This is ur Total Score is : " ,score)