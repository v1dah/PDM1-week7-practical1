let colourPicker
let modeButton
let slide

function setup (){
    createCanvas (800,600)
    background(255)

    const container = select("main")
    colourPicker = createColorPicker();
    colourPicker.parent(container)
    colourPicker.size(100)
    colourPicker.position(0, 573)

    modeButton = createButton("Clear")
    modeButton.parent(container)
    modeButton.size(100,29)
    modeButton.position(200, 571)
    modeButton.mouseClicked()

    slide = createSlider(5,255)
    slide.parent(container)
    slide.size()
    slide.position(400,579)
}

function draw(){
    if (mouseIsPressed){
        fill(colourPicker.value())
        circle(mouseX, mouseY,slide.value())
    }
}