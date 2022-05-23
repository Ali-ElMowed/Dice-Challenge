
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
    
    


}