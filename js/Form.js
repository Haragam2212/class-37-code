class Form{
    constructor(){
         this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }
     hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();
     this.title.hide();
     }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-50,displayHeight/2-80);
        this.button.position(displayWidth/2-30,displayHeight/2);

        //perform the following when play button is pressed
        this.button.mousePressed(()=>{
        
         this.input.hide();
         this.button.hide();
         player.name=this.input.value();
         playerCount=playerCount+1;
         player.index=playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("hello, "+player.name);
         this.greeting.position(displayWidth/2-70,displayHeight/4);
         })

        
    }





}