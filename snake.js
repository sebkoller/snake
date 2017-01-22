/*eslint-disable no-unused-vars*/

class Snake {
	constructor(height, width, scale, p5) {
		this.scale = scale;
		this.ydir = 0;
		this.xdir = 1;
		this.height = height;
		this.width = width;
		this.pos = p5.createVector();
		this.p5 = p5;

		this.tail = [this.pos];
	}

	eat(pos) {
		var distance = this.pos.dist(pos);

		if (distance < 1) {
			this.tail.push(this.p5.createVector(this.pos.x, this.pos.y));
			return true;
		} else {
			return false;
		}
	}

	direction(x, y) {
		let absSum = (x,y) => Math.abs(x) + Math.abs(y);

		let goingBackwardsOnX = [this.xdir, x].reduce(absSum) > 1;
		let goingBackwardsOnY = [this.ydir, y].reduce(absSum) > 1;

		if (!goingBackwardsOnX && !goingBackwardsOnY) {
			this.xdir = x;
			this.ydir = y;
		}
	}

	move(pos) {
		pos.x = pos.x + this.xdir * this.scale;
		pos.y = pos.y + this.ydir * this.scale;

		pos.x = this.p5.constrain(pos.x, 0, this.width - this.scale);
		pos.y = this.p5.constrain(pos.y, 0, this.height - this.scale);
	}

	update() {
		this.move(this.pos);

		for (let i = 0; i < this.tail.length -1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		this.tail[this.tail.length-1] = this.pos.copy();

		//this.tail.forEach((t, i, arr) => {
		//	if (i != arr.length - 1) {
		//		t = arr[i +  1];
		//	} else {
		//		t = this.pos.copy();
		//	}
		//});
	}

	debug() {
		console.log(this.tail);
	}

	draw() {

		this.p5.fill(255);
		this.p5.noStroke();

		this.tail.forEach(pos => this.p5.rect(pos.x, pos.y, this.scale, this.scale));

		this.p5.rect(this.pos.x, this.pos.y, this.scale, this.scale);
	}


}

