class Player{
constructor(){
 this.index=null;
 this.distance=0;
 this.name=null;   
}

getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      //  stores the value into the variable gameState
        playerCount = data.val();
    })
}

//update the gameState into the gameState index in the database
updateCount(count){
    database.ref('/').update(
        {
            playerCount : count
        }
        );
}
update(){
 var playerIndex="players/player"+this.index;
 database.ref(playerIndex).set({
name: this.name,
distance:this.distance
});
}
 static getPlayerInfo(){
  database.ref('players').on("value",(data)=>{
      allPlayers=data.val()

 })   
}
}