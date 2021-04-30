left_wrist_x = 0;
right_wrist_x = 0;
Wrist_d = 0;

function preload(){
}

function setup(){
canvas = createCanvas(400, 400);
canvas.center();
Video = createCapture(VIDEO);
Video.size(300, 300);

poseNet = ml5.poseNet(Video, model_loaded);
poseNet.on("pose", gopose);
}

function model_loaded(){
console.log("Model Loaded!");
}

function draw(){
textSize(Wrist_d);
fill("#00ffff");
text("Hello", 50, 200);
canvas.clear();
}

function gopose(results){
if(results.length > 0){
console.log(results);

left_wrist_x = results[0].pose.leftWrist.x;
right_wrist_x = results[0].pose.rightWrist.x;

Wrist_d = floor(left_wrist_x - right_wrist_x);
}
}