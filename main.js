img= "";
dstatus= "";
objects = [];

function preload() {
    img = loadImage('https://st2.depositphotos.com/7865540/10697/i/600/depositphotos_106979746-stock-photo-laptop-with-special-offer-text.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(300 , 105);
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}

function modelLoaded() {
    console.log("model loaded!");
 dstatus = true;
 objectDetector.detect(img, gotResult);
}

function gotResult(error , results){
if(error) {
    console.log(error);
}
console.log(results);
objects = results;
}
function draw() {
    image(img, 0, 0, 640, 420);

    if(dstatus  !="")
    {
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status : object Detected";
            console.log("hi")
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i]. y + 15);
            noFill();
            stroke("ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i]. height);
        }
    }
   
}
