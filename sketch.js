/*eslint-disable no-unused-vars*/
/* global Snake Food p5 */

let snake;
let food;
let scale = 20;
let height = 600;
let width = 600;

let p = new p5();

let totalField;

document.onreadystatechange = () => {
    if (document.readyState == "interactive") {
		console.log('ready');
		totalField = document.getElementById('total');

    }
}

function setup() {
	createCanvas(height, width);
	frameRate(10);

	snake = new Snake(height, width, scale, p);
	food = new Food(height, width, scale, p);
}

function draw() {
	background('#282828');


	snake.update()
	snake.draw();

	if (snake.eat(food.pos)) {
		updateTotal(snake.tail.length);
		food.spawn()
	}

	food.draw();
}

function mousePressed() {
	snake.debug();
}

function updateTotal(total) {
	totalField.textContent = total;
}


function keyPressed(event) {

	if (event.key == 'ArrowUp') {
		snake.direction(0, -1);
	}

	if (event.key == 'ArrowDown') {
		snake.direction(0, 1);
	}

	if (event.key == 'ArrowLeft') {
		snake.direction(-1, 0);
	}

	if (event.key == 'ArrowRight') {
		snake.direction(1, 0);
	}
}
