let colourPicker1
let colourPicker2

function setup (){
    createCanvas(400,300)
    colourPicker1 = createColorPicker()
    colourPicker2 = createColorPicker()
    const container = select("main")
    colourPicker1.parent(container);
    colourPicker2.parent(container);

    colourPicker1.position(0,0)
    colourPicker2.position(350, 0)
}

function draw(){
    background(colourPicker1.value());
    fill(colourPicker2.value());
    
    textAlign(CENTER)
    textSize(50)
    text ("Hello, Jerry!", width/2, height/2)
}