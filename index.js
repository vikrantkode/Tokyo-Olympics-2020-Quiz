var readlineSync = require("readline-sync")

//entry point to quiz
var userName = readlineSync.question("What is your name...? ");
//console.log("-------------------------------------------------")
console.log("Welcome " + userName + " Let's play Olympic Quiz 2020");
console.log("=================================================")

var score = 0 ;
function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("Wohoo...It's correct")
    score = score + 1;
      }else{
    console.log("Oops...Wrong Answer")
    score = score - 1;
      }
  console.log("Your Score is : "+score)
  console.log("-----------------------------")
}

// quiz("Q1 : Who won most medals in Olympics 2021 ? ","USA")
// quiz("Q2 : How many medals India won in Olympics 2021 ? ","7")
// quiz("Q3 : Who won Gold Medal for India in Olympics 2021 ? ","Neeraj Chopra")

//objects in loop
var questions = [
{
 question: "Q1 : Whether it is Tokyo Olympic 2020/2021 ?\n ",
 answer  : "2020"
},
{
 question: "Q2 : Who won most medals in Tokyo Olympics 2020 ? (USA / China)\n ",
 answer  : "USA"
},
{
 question: "Q3 : How many medals India won in Tokyo Olympics 2020 ?(16 / 7)\n ",
 answer  :"7"
},
{
 question: "Q4 : Who won Gold Medal for India in Tokyo Olympics 2020 ?\n(Neeraj Chopra / Mirabai Chanu)\n ",
 answer  : "Neeraj Chopra"
},
{
 question: "Q5 : Who carried Indian Flag at opening ceremony of Tokyo Olympic 2020 ?\n(Manpreet Singh / Bajrang Poonia)\n",
 answer  : "Manpreet Singh"
},
{
 question: "Q6 : Who carried Indian Flag at closing ceremony of Tokyo Olympic 2020 ?\n(Bajrang Poonia / P.V. Sindhu)\n ",
 answer  : "Bajrang Poonia"
}
];

for(var i=0;i<questions.length;i++){
 var currentQuestion = questions[i];
 quiz(currentQuestion.question,                    currentQuestion.answer )
}
console.log("You Scored total : " + score + " : points")