var bg;
var form;

//variables (soon to be images) below are needed for Lobby.js
var gameState=0;
var playButtonImg;
var player1Img;
var trophyImg;
//these are the sprites needed in the Lobby.js
var playButton;
var player1;
var trophy;
//the sprite below is the main sprite for lobby.js
var lobby;

var playerCount;
var player, game;
var player1, player2,player3, player4,player5, player6;
var players;
var allPlayers;
var soccerImg;



function preload(){
    bg = loadImage("backgound.jpg");
    soccerImg = loadImage("SoccerCourt0.png");
    
}

function setup(){
   createCanvas(displayWidth, displayHeight-150);
   database = firebase.database();



   game = new Game();
   game.getState();
   game.start();
   
    
}

function draw(){
    if(gameState === 0){
        background(bg);
    }
    else if(gameState === 1){
        background(soccerImg)
    }

    if(playerCount === 6){
        game.update(1);
        
    }
    if(gameState === 1){
        clear ();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    


    

    drawSprites();
}   

