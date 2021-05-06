class Question{
    constructor(){
        this.input1=createInput("Name please");
        this.greeting=createElement("h2");
        this.button=createButton("submit");
        this.input2=createInput("enter answer");
        this.title=createElement("h4");
        this.question=createElement("h2");
        this.option1=createElement("h2");
        this.option2=createElement("h2");
    }
    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,20);
        this.question.html("what starts and ends with e but only has one letter?");
        this.question.position(150,80);
        this.option1.html("1.envelope");
        this.option2.html("2.elephant");
        this.option1.position(150,100);
        this.option2.position(150,120);
        this.input1.position(150,230);
        this.input2.position(350,230);

        this.button.mousePressed(()=>{
         this.title.hide();
         this.input1.hide();
         this.button.hide();
         contestant.name=this.input1.value();
         contestantCount+=1;
         contestant.index=contestantCount;
         contestant.updateContestantDetails();
         contestant.updateCount(contestantCount);
        })
    }

    hide(){
        this.input2.hide();
        
    }
}
