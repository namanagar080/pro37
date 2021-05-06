var canvas;
var database;
var gameState=0;contestantCount=0;
var quiz,contestant,question;
function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  console.log(database);
  quiz=new Quiz();
  quiz.getState();
 quiz.start();
// question=new Question();
 //question.display();
}


function draw(){
  background("pink");
  if(playerCount===4){
    gameState=1;
    quiz.updateState(gameState);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}
