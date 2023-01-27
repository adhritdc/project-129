leftWristX = ""; 
leftWristY = "";
rightWristX = "";
rightWristY = "";
song = "";
InNumberleftWristY = "";
remove_decimals = "";
scoreLeftWrist = "";
scoreRightWrist="";

The_spectre_song="";
Harry_potter_theme_song="";
function preload()
{
    The_spectre_song = loadSound("Alan-Walker-Spectre(NCS).mp3");
    Harry_potter_theme_song = loadSound("ncs_HARRYPOTTERTHEME.mp3");
}
function setup()
{
    canvas = createCanvas(600,530);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
    function draw(){
        image(video,0,0,600,530);
    
        fill("#00ff00");
        stroke("#ff0000");
    
        song_name = The_spectre_song.isPlaying();
        console.log(song_name);
    
        if(scoreLeftWrist > 0.2){
            circle(leftWristX,leftWristX,20);
            Harry_potter_theme_song.stop();
            if(song_name == false){
                The_spectre_song.play();
            }
            else{
                console.log("Song Name: Spectre");
                document.getElementById("song_id").innerHTML = "Song Name: Spectre";
            }
        }
    }
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() 
{
    console.log("PoseNet is initialized");
}
function gotPoses(results) 
{ 
    if(results.length > 0) 
    { 
        scoreRightWrist = results[0].pose.keypoints[10].score; 
        scoreLeftWrist = results[0].pose.keypoints[9].score; 
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist); 
        rightWristX = results[0].pose.rightWrist.x; rightWristY = results[0].pose.rightWrist.y; 
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY); 
        leftWristX = results[0].pose.leftWrist.x; leftWristY = results[0].pose.leftWrist.y; 
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY); 

    } 
}