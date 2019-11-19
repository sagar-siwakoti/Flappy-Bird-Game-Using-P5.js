var bird;
var pipes = [];
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();                    //object for bird class in bird.js
}
//making draw function
function draw() {

    background(145) //set background to gray (0-255)

    if (frameCount % 200 == 0) { //every 200 frame create new pipe
        pipes.push(new Pipe());    //pipes are stored in array called pipes
    }

    for (var pipe of pipes) { 
        pipe.show();         //show pipes in screen
        pipe.update();     //update the position  

        if (bird.touches(pipe)) {
            noLoop()     //built in library in p5.js
            console.log("GAME OVER")
        }

    }

    bird.show();
    bird.update();
  // put drawing code here
}

function keyPressed() {
    if (key == ' ') {
        bird.fly();
    }
}
