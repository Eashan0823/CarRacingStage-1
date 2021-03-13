class Form{
    constructor(){

    }
    display(){
        //Creating title for home page 
        var title=createElement("h2");
        title.position(130,0);
        title.html("Car Racing Game");
        var input=createInput("name");
        input.position(130,160);
        var button=createButton("Play");
        button.position(260,200);
        //When mouse is pressed hide input and button from race track
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting=createElement("h3");
            //html is to display text
            greeting.html("hello"+ name);
            greeting.position(130,160);
        })
    }
}