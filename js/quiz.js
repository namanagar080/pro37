class Quiz{
    constructor(){}

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
 }

 updateState(state){
    database.ref("/").update({
        gameState:state
    })
    }

    async start(){
        if(gameState===0){
           contestant=new Contestant();
            var contestantCountRef=await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
           question=new Question();
            question.display();
            console.log("hi");
        }
        console.log("hello");
    }


    play(){
      question.hide();
        background("yellow");
        textSize(40);
        text("Quiz Result",350,20);
        contestant.getContestantInfo();
        if(allPlayers!=undefined){
            for(var plr in allPlayers){
                var correctAns=2;
                if(correctAns===allPlayers[plr].input2){
                    fill("green");
                    text(contestant.name+" "+allPLayers[plr].input2,200,100);
                    
                    }
                    else{
                        fill("red");
                        text(contestant.name+" "+allPlayers[plr].input2,200,100);
                    }
                }
            }
        }
    }
