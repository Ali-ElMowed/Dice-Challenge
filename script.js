
var mainText = document.getElementsByTagName("h1")[0];
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

var randomOne = 0;
var randomTwo = 0;

//document.addEventListener('load',game)
window.onbeforeunload = game() 
function game(){
    randomOne = Math.floor(Math.random()*6)+1;
    randomTwo = Math.floor(Math.random()*6)+1;
    if (randomOne==1){
        img1.src="images/dice1.png";
    }
    else if(randomOne==2){
        img1.src="images/dice2.png";
    }
    else if(randomOne==3){
        img1.src="images/dice3.png";
    }
    else if(randomOne==4){
        img1.src="images/dice4.png";
    }
    else if(randomOne==5){
        img1.src="images/dice5.png";
    }
    else if(randomOne==6){
        img1.src="images/dice6.png";
    }

    if (randomTwo==1){
        img2.src="images/dice1.png";
    }
    else if(randomTwo==2){
        img2.src="images/dice2.png";
    }
    else if(randomTwo==3){
        img2.src="images/dice3.png";
    }
    else if(randomTwo==4){
        img2.src="images/dice4.png";
    }
    else if(randomTwo==5){
        img2.src="images/dice5.png";
    }
    else if(randomTwo==6){
        img2.src="images/dice6.png";
    }

    if( randomOne == randomTwo){
        mainText.innerHTML="Draw"
    }
    else if( randomOne > randomTwo){
        mainText.innerHTML="Player 1 Wins";
    }
    else{
        mainText.innerHTML="Player 2 Wins";
    }
    


}