class Game{
    constructor(){}

        //Read the gameState from database 
       getState(){
            var gameStateRef = database.ref('gameState');
            gameStateRef.on("value",function(data){
              //  stores the value into the variable gameState
                gameState = data.val();
            })
        }

        //update the gameState into the gameState index in the database
        update(state){
            database.ref('/').update(
                {
                    gameState : state
                }
                );
        }
    
        //Displays the form during the gameState=0 
        async start(){
            if(gameState == 0){
               player = new Player();
               var playerCountRef = await database.ref('playerCount').once("value");
               if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
             }
               form = new Form();
               form.display();
            }
            car1=createSprite(100,200);
            car2=createSprite(300,200);
            car3=createSprite(500,200);
            car4=createSprite(700,100);
            cars=[car1,car2,car3,car4];
       }
       play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            console.log("check 1")
         var index=0;
         var x=0;
         var y;
         for(var plr in allPlayers){
             console.log("check 2")
          index=index+1;
          x=x+200;
          y=displayHeight-allPlayers[plr].distance
          cars[index-1].x = x;
          cars[index-1].y = y;
          if(index===player.index){
           cars[index-1].shapeColor="red";
        }
          
         
        }
    }
       if(keyIsDown(UP_ARROW) && player.index !== null){
           console.log("check 3")
        player.distance=player.distance+10;
        player.update();
       }
       drawSprites();


      
}

}
