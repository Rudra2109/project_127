function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
song=""
song2=""

function preload()
{
 song = loadSound("music.mp3");
 song2 = loadSound("music2.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song2.play();
}