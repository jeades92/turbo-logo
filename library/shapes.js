class Shape {
    constructor(text, textColor, shapeColor,shape){
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor,
        this.shape = shape
    }
    printText(){
        return `<text x="50" y="50" text-anchor="middle" dominant-baseline="central" style="fill: ${this.textColor};">${this.text}</text>`
    }
    renderSVG(){
        return `<svg height="200" width ="300">
        ${this.render()}
        ${this.printText()}
        </svg>`
    }
}

class Triangle extends Shape {
    constructor(text,textColor, shapeColor){
        super(text,textColor, shapeColor, "triangle")
    }
    render(){
        return `<polygon points="50,10 10,90 90,90" />`
    }
}

class Circle extends Shape {
    constructor(text,textColor, shapeColor){
        super(text,textColor, shapeColor, "circle")
    }
    render(){
        return `<circle cx="50" cy="50" r="40"  style="fill: ${this.shapeColor};" />`
    }
}

const exampleTriangle = new Circle("AAA", "blue", "red")

const fs = require("fs/promises")

fs.writeFile("logo.svg", exampleTriangle.renderSVG())