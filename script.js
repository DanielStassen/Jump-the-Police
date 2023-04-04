var character = document.getElementById("character");
var block = document.getElementById("block");
let score = 0;



function reloadPage(){
location.reload();
}

function jump(){
	if(character.classList != "animate"){
	character.classList.add("animate");
	}
	
	setTimeout(function(){
		character.classList.remove("animate");
	},500); 
	
}

var checkDead = setInterval(function(){
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft<60 && blockLeft>0 && characterTop>=130){
		var endScore = Math.round(score / 100) - 1;
		
		block.style.animation = "none";
		block.style.display = "none";
		alert("GAME OVER\nYoure Score is: " + endScore);	
	}
	else{
		score++;
	}
},10);
