let items = [];
let images = [];
const itemCount = 20; // Number of fruits/vegetables to fall
let headerHeight;
let footerHeight;

function preload() {
    // Preload images - replace with actual paths to your images
    images.push(loadImage('images/apple.png'));
    images.push(loadImage('images/banana.png'));
    images.push(loadImage('images/broc.png'));
    images.push(loadImage('images/carrot.png'));
    images.push(loadImage('images/egg.png'));
    images.push(loadImage('images/steak.png'));
    images.push(loadImage('images/chicken.png'));
    images.push(loadImage('images/whey.png'));
    images.push(loadImage('images/milk.png'));
    images.push(loadImage('images/burger.png'));
    images.push(loadImage('images/pizza.png'));
    images.push(loadImage('images/strawberry.png'));
    images.push(loadImage('images/blueberry.png'));
    images.push(loadImage('images/orange.png'));



}

function setup() {
    headerHeight = document.querySelector('header').offsetHeight;
    footerHeight = document.querySelector('footer').offsetHeight;
    let availableHeight = windowHeight - headerHeight - footerHeight;

    canvas = createCanvas(windowWidth, availableHeight);
    canvas.position(0, headerHeight);
    canvas.style('z-index', '-1');

    for (let i = 0; i < itemCount; i++) {
        let img = random(images);
        let x = random(width);
        let y = random(-200, -50); // Start above the visible area
        items.push(new FallingItem(x, y, img));
    }
}

function draw() {
    clear();
    items.forEach(item => {
        item.fall();
        item.show();
    });
}

function windowResized() {
    headerHeight = document.querySelector('header').offsetHeight;
    footerHeight = document.querySelector('footer').offsetHeight;
    let availableHeight = windowHeight - headerHeight - footerHeight;
    
    // Resize the canvas to the new available height when the window is resized
    resizeCanvas(windowWidth, availableHeight);
    
    // Update the position of the canvas in case the header or footer size has changed
    canvas.position(0, headerHeight);
}

class FallingItem {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.speed = random(1,3);
        this.angle = random(TWO_PI); // New: use radians for a full rotation
        this.spin = random(-0.01, 0.01); // New: add a slight spin
        this.img = img;
        this.imgWidth = random(50, 100); // New: randomize the image size for variety
        this.imgHeight = this.imgWidth * 1.5; // Maintain aspect ratio
    }
    fall() {
        this.y += this.speed;
        // Reset the position of the food item to just below the header
        if (this.y > height) {
            this.y = random(-200, -50);
            this.x = random(width);
            this.angle = random(-0.1, 0.1);
        }
    }
    

    show() {
        push();
        translate(this.x, this.y);
        rotate(this.angle); // Apply the rotation
        imageMode(CENTER);
        image(this.img, 0, 0, this.imgWidth, this.imgHeight); // Use the dynamic size
        pop();
    }
}