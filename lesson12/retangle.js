class Rectangle {
	constructor(width = 5, height = 5) {
		this.width = width;
		this.height = height;
	}

	setWidth(value) {
		if (typeof value === 'number') {
			this.width = value;
		} else {
			throw new TypeError();
		}
	}

	getWidth() {
		return `${this.width}cm`;
	}

	setHeight(value) {
		if (typeof value === 'number') {
			this.height = value;
		} else {
			throw new TypeError();
		}
	}

	getHeight() {
		return `${this.height}cm`;
	}
}

const rectangle = new Rectangle();
console.log(rectangle.getWidth()); // 5cm
console.log(rectangle.getHeight()); // 5cm

rectangle.setWidth(10);
console.log(rectangle.getWidth()); // 10cm

rectangle.setHeight(20);
console.log(rectangle.getHeight()); // 20cm