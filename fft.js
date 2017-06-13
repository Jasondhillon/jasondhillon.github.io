var audioCtx, audioEl, analyser, bufferLength, canvas, canvasCtx, source, dataArray, barGradient, nowPlaying
	WIDTH  = window.innerWidth,
	HEIGHT = window.innerHeight,
	tracks = ['cop', 'paradise', 'lane'],

	colors = [{ 'from' : '#24c6fb', 'to' : '#2CC932'}
			  //{ 'from' : '#5beaff', 'to' : '#9a5bff'}
			 ];
			  
/*function loadAudio (name)
{
	// document.getElementById('oggsrc').src = 'assets/audio/'+name+'.ogg';
	document.getElementById('mp3src').src = 'assets/audio/'+name+'.mp3';
	audioEl.load();
}*/

function init()
{
	/*
	document.addEventListener("click", toggleAudio);
	document.addEventListener("touchstart", toggleAudio);
	
	canvas = document.getElementById('yaebal');
	canvas.width = WIDTH; canvas.height = HEIGHT;
	canvasCtx = canvas.getContext('2d');
	
	barGradient = canvasCtx.createLinearGradient(0,0,0,HEIGHT);
	
	var color = colors[Math.floor(Math.random()*colors.length)];
	
	barGradient.addColorStop(1, color.to);
	barGradient.addColorStop(0, color.from);
	
	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	analyser = audioCtx.createAnalyser();
	
	analyser.minDecibels = -180;
	analyser.maxDecibels = -20;
		
	analyser.fftSize = 2048;
	bufferLength = analyser.frequencyBinCount;
	dataArray = new Uint8Array(bufferLength);
	
	
	audioEl = document.getElementById('nyann');
	audioEl.crossOrigin = "anonymous";

	source = audioCtx.createMediaElementSource(audioEl);
    source.connect(analyser);
	source.connect(audioCtx.destination);
	// analyser.connect(audioCtx.destination);
	
	loadAudio(tracks[Math.floor(Math.random()*tracks.length)]);
	audioEl.play(); */
	
	//draw();
}


function draw()
{
	requestAnimationFrame(draw);
	//analyser.getByteFrequencyData(dataArray);
	
	canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
	
	var barWidth = Math.ceil(WIDTH / bufferLength);
	var barHeight;
	
	var x = 0;

	for (var i = 0; i < bufferLength; i++) {
        barHeight = ((HEIGHT * dataArray[i]) / 256);
		
		canvasCtx.fillStyle = barGradient;
        canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
}


/*function toggleAudio()
{	
	if (audioEl.paused)
	{
		if (audioEl.readyState == 0)
			loadAudio(tracks[Math.floor(Math.random()*tracks.length)]);
		
		audioEl.play();
	}
	else
		audioEl.pause();
}
*/
window.onload = init;