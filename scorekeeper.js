var buttonp1 = document.getElementById("p1");
var buttonp2 = document.getElementById("p2");
var reset = document.getElementById("reset");
//var h1 = document.querySelector("h1");
var span1 = document.getElementById("sp1");
var span2 = document.getElementById("sp2");
var reset=document.getElementById("reset");

var playto=document.getElementById("inp");
var displayplayto=document.getElementById("ply");
var submit = document.getElementById("submit");
var gameover = 0;
function reset1(){

p1score = 0;
span1.textContent = p1score;
p2score = 0;
span2.textContent = p2score;
gameoverb = false;
span1.style.color = "black";
span2.style.color = "black";
}
submit.addEventListener("click",function(){
 gameover = playto.value;
 displayplayto.textContent = gameover;
 reset1();

});
var gameoverb = false;

var p1score =1;
buttonp1.addEventListener("click",function(){ 
if(!gameoverb)
{
	p1score++;
if(p1score == gameover)
{  gameoverb = true;
	span1.style.color = "green";
  
}
span1.textContent = p1score;
}

});
var p2score = 0;
buttonp2.addEventListener("click",function(){ 

 if(!gameoverb)
 {
   p2score++;
  if(p2score == gameover)
  {
   gameoverb = true;
   span2.style.color = "green";
  }
span2.textContent = p2score;
}
});
reset.addEventListener("click",function(){
reset1();
});
reset.addEventListener("mouseover",function() {
	reset.style.background = "grey";
});
reset.addEventListener("mouseout",function() {
	reset.style.background = "white";
});




 