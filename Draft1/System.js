//Overall Logistics
//Code a character
//LINE: an array with potential lines
//EMOTION: the emotion the character is in 
//BEHAVIOR: the behavior the character is in 
//SOUNDEFFECT: The real-time sound effect
//OBJECT


// pseudo container for elements
let lineBase = ["Hi","Hello","Bye"];
let emotionBase = [] // emotionBase may need to use a enumeration
let behaviorBase = ["leave","standup"];
let cav;



// character class
class character{
  constructor(name){
    this.name = name;

    // the eyePosition will not change
    //this.leftEyePos = width/4-100;
    //this.rightEyePos = height/4+80;
  
  }

  display(){
    // name
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(45);
    text(this.name,width/2,height/8);

    // line
    textStyle(NORMAL);
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(monologue,3*width/4,height/4);
  
    // behavior
    textStyle(ITALIC);
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(behavior,3*width/4,3*height/4);

    //emotion
    fill(255);
    noStroke();
    ellipse(width/4-100,height/4+80,50,50);
    ellipse(width/4+100,height/4+80,50,50);

  }
}


// Line methods
function greet(){
  monologue = "Hi there";
}

function farewell(){
  monologue = "bye";
}
function rLine(){
  monologue = lineBase[floor(random(0,lineBase.length))];
}
function say(input){
  monologue = input;
}


// Emotion methods
function moderate(){
  push();
  stroke(255);
  strokeWeight(10);
  line(cav.width/4-50,cav.height/2,cav.width/4+50,cav.height/2);
  pop();
}

function sad(){
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  arc(cav.width/4,cav.height/2,150,50,PI,0);
  pop();
}

function happy(){
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  arc(cav.width/4,cav.height/2,150,50,0,PI);
  pop();
}

function cry(){
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  arc(cav.width/4,cav.height/2,150,50,PI,0);
  pop();
}

function rEmotion(){
  [sad,happy][floor(random(0,2))]();
}

//Behavior methods
function leave(){
  behavior = "leaves";
}




// draw
function setup() {
  cav = createCanvas(1000,750);
}


let monologue = "This is a line";
let behavior= "This is a behavior";



