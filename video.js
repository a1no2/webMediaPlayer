
var speed = 1;

//再生速度の制御部分
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
	media.pause();
	media.play();
	document.getElementById("speedmeter").innerHTML = "再生速度: " + String(speed);
}



//動画のパスが入力された時その動画をセットする
function setVideo(){
	var pass = document.getElementById("text").value;
	console.log(pass);
	var media = document.getElementById("mv");
	media.src = pass;
	document.getElementById("text").value = "";
}
function enter(){	//エンターキーでも反応するように
	if (window.event.keyCode == 13){
		setVideo();
	}
}


//動画の再生時間（今みてるとこ）の変更
function back(){
	playbackTimeControl(-10);
}
function skip(){
	playbackTimeControl(90);
}
function playbackTimeControl(time){
	var media = document.getElementById("mv");
	media.pause();
	media.currentTime += time;
	media.play();
	media.defaultPlaybackRate = speed;

}








