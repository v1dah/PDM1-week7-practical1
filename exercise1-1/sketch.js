let modeButton;

function setup(){
createCanvas (400,300)
background(250,0,110)
    modeButton = createButton("Add circle")

    let mainContainer = select("main")
    modeButton.parent(mainContainer)
    modeButton.position(0, 270)
    modeButton.size(400)
    modeButton.mouseClicked(testEventListener)
}

function testEventListener() {
    fill(random(255), random(255), random(255))
    circle(random(width), random(height), random(0,100))
}

function draw(){

}
