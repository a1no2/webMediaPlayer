
var speed = 1;

function speedChange(gear){
	var media = document.getElementById("mv");
	switch(gear){
		case 1:		//加速
			speed += 0.1;
			break;
		case -1:	//減速
			speed -= 0.1
			if (speed <= 0){
				speed = 0.1;
			}
			break;
		case 0:		//通常再生速度
			speed = 1;
			break;
	}


	speed *= 10;
	speed = Math.floor(speed);
	speed /= 10;
	media.playbackRate = speed;
	media.defaultPlaybackRate = speed;
	mv.pause();
	mv.play();
	document.getElementById("speedmeter").innerHTML = "再生速度: " + String(speed);
}


function setVideo(){
	var pass = document.getElementById("text").value;
	console.log(pass);
	var video = document.getElementById("mv");
	video.src = pass;
}

