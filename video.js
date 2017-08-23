
var speed = 10;		//再生速度 小数点で扱うと謎にずれるので割る10して扱う

//再生速度の制御部分
function speedChange(gear){
	var media = document.getElementById("mv");
	switch(gear){
		case 1:		//加速
			speed += 1;
			break;
		case -1:	//減速
			speed -= 1
			if (speed <= 0){
				speed = 1;
			}
			break;
		case 0:		//通常再生速度
			speed = 10;
			break;
	}
	// speed /= 10;
	// speed = Math.floor(speed);
	media.playbackRate = (speed / 10);
	media.defaultPlaybackRate = (speed / 10);
	media.pause();
	media.play();
	document.getElementById("speedmeter").innerHTML = "再生速度: " + String((speed/10));
}



//動画のパスが入力された時その動画をセットする
function setVideo(){
	var videoUrl = document.getElementById("text").value;
	console.log(videoUrl);
	var media = document.getElementById("mv");
	media.src = videoUrl;
	document.getElementById("text").value = "";

	setText(videoUrl);
}
//urlの一時保存？
function setText(videoUrl){
	var history_url = document.createElement("li");
	history_url.innerHTML = '<a href="' + videoUrl + '" target="_blank">' + videoUrl + '</a>';
	document.getElementById("history").appendChild(history_url);
}
//エンターキーでも反応するように
function enter(){
	if (window.event.keyCode == 13){
		setVideo();
	}
}


//動画の再生時間の変更 引数:移動させたい再生時間だけ+-
function playbackTimeControl(time){
	var media = document.getElementById("mv");
	media.pause();
	media.currentTime += time;
	media.play();
	media.defaultPlaybackRate = (speed / 10);

}

