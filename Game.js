class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1 = createSprite(displayWidth/2, (displayHeight-150)/2, 40, 40);
      player2 = createSprite(displayWidth/2, (displayHeight-150)/2, 40, 40);
      player3 = createSprite(displayWidth/2, (displayHeight-150)/2, 40, 40);
      player4 = createSprite(displayWidth/2, (displayHeight-150)/2, 40, 40);
      player5 = createSprite(displayWidth/2, (displayHeight-150)/2, 40, 40);
      player6 = createSprite(displayWidth/2, (displayHeight-150)/2, 40, 40);

      players = [player1,player2,player3,player4,player5,player6];

      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      
      if(allPlayers !== undefined){
        
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            players[index - 1].shapeColor = "red";
            camera.position.x = players[index-1].x;
            camera.position.y = players[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distanceY +=10
        player.update();
      }
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distanceY -=10
        player.update();
      }
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distanceX +=10
        player.update();
      }
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distanceX -=10
        player.update();
      }

      switch(player.brawlerNum){
        case 1:
      }
      
      
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      
    }
  }