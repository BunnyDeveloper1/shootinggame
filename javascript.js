let count = 0;
const w = window.innerWidth - 50;
const h = window.innerHeight - 150;
let score = 0;
let ammo = 0;
let timer = 0;
let target = 0; 
const music = document.createElement("audio");
music.src="images/SHOTGUN.mp3";
music.setAttribute("preload", "auto");
music.style.display = "none";

function setvalues(){
	
	ammo = 10
	timer = 30;
	target = 8;
}
function win(){
	if(ammo <=0 && timer > 0 && score == target)
	{
		alert("You Win");
		window.location.reload();
		setvalues();
	}
}
function losses(){
	if((ammo <= 0 || timer <= 0) && score != target)
	{
		alert("You Losses");
		window.location.reload();
		setvalues();
	}
}
function shoot(){
	music.play();
	ammo -= 1;
	document.getElementById("ammo").innerHTML = "Ammo: "+ammo;

};
let times = window.setInterval(function time_s(){
	win();
	losses();
	timer -= 1;
	document.getElementById("time").innerHTML = "Timer: "+timer;
	console.log(timer);
	
	}, 1000);



let horizantal = window.setInterval(function horizantal_birds(){
	
	var i = 0;
	let bird = document.getElementById("backgrounds");
	
	document.body.appendChild(music);
	let transform = Math.random()*0;
	let top = Math.random()*h;
		var div = document.createElement('div');
		div.setAttribute("id", "blue-birdH");
		div.onclick = function(){
			div.remove();
			score +=1;
			document.getElementById("score").innerHTML = "Socre: "+score;
			
			
			
		}
		div.style.backgroundImage="url('https://c.tenor.com/C666tV6wcScAAAAj/flying-bird-gif-bird.gif')";
		div.style.backgroundSize="100% 100%";
		div.style.width="60px";
		div.style.height="60px";
		div.style.transform="rotate("+transform+"deg)";
		div.style.position="absolute";
		div.style.right="0";
		div.style.top=""+(top);
		div.style.animation="birdmovehorizantal 5s linear infinite";
		bird.appendChild(div);
		count += 1;
		if (count == 10){
		  clearInterval(horizantal);
		  clearInterval(virtical);
		 
		}

		
	

}, 1000);

let virtical = window.setInterval(function virtical_birds(){
	var i = 0;
	let bird = document.getElementById("backgrounds");
	document.body.appendChild(music);
	let transform = Math.random()*45;
	let left = Math.random()*w;
		var div = document.createElement('div');
		div.setAttribute("id", "blue-birdV");
		div.onclick = function(){
			div.remove();
			score +=1;
			document.getElementById("score").innerHTML = "Socre: "+score;
			
			
		}
		div.style.backgroundImage="url('https://c.tenor.com/cyIGzBteQlQAAAAi/rio-bird.gif')";
		div.style.backgroundSize="100% 100%";
		div.style.width="50px";
		div.style.height="50px";
		div.style.transform="rotate("+transform+"deg)";
		div.style.position="absolute";
		div.style.bottom="15px";
		div.style.left=""+left;
		div.style.animation="birdmovevirtical 5s linear infinite";
		bird.appendChild(div);

},2000);



function distroy(div){
		div.style.display="hidden";
}
