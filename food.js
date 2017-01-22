/*eslint-disable no-unused-vars*/

class Food {
	constructor(height, width, scale, p5) {
		this.scale = scale;
		this.height = height;
		this.width = width;

		this.p5 = p5;
		this.pos = new p5.createVector();

		this.spawn();
	}

	spawn() {
		this.pos.x = this.pickRandom(width);
		this.pos.y = this.pickRandom(height);
	}

	pickRandom(dimension) {
		return Math.floor(dimension / this.scale * Math.random())* this.scale;
	}

	draw() {
		this.p5.fill('#cc241d');
		this.p5.noStroke();
		this.p5.rect(this.pos.x, this.pos.y, this.scale, this.scale);
	}

}
