// module aliases
const Engine = Matter.Engine,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Render = Matter.Render,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	Composite = Matter.Composite;

// create an engine
const engine = Engine.create();

// MANIPULATING DOM ELEMENTS
class ElementBox {
	spacingX = Math.floor(container.offsetWidth / 4);
	constructor(n, element) {
		let x = (n % 4) * this.spacingX + Math.floor(element.offsetWidth / 2);
		let y = n > 4 ? element.offsetHeight + 50 : 0;
		let options = {
			friction: 0.1,
			restitution: 0.5,
		};
		this.body = Bodies.rectangle(x, y, element.offsetWidth, element.offsetHeight, options);
		this.element = element;
		Composite.add(engine.world, this.body);
	}

	show() {
		let pos = this.body.position;
		let angle = this.body.angle;
		this.element.style.top = pos.y - Math.floor(this.element.offsetHeight / 2) + "px";
		this.element.style.left = pos.x - Math.floor(this.element.offsetWidth / 2) + "px";
		this.element.style.rotate = angle + "rad";
	}
}

const container = document.querySelector("#skill-container");
let skillBoxes = Array.from(document.querySelectorAll(".tool"));
skillBoxes = skillBoxes.map((box, index) => new ElementBox(index, box));

let height = container.offsetHeight;
let width = container.offsetWidth;
let x = container.offsetLeft;
let y = container.offsetTop;
const static = { isStatic: true };

let leftWall = Bodies.rectangle(-5, Math.floor(container.offsetHeight / 2), 10, height, static);
let rightWall = Bodies.rectangle(width + 5, Math.floor(container.offsetHeight / 2), 10, height, static);
let topWall = Bodies.rectangle(Math.floor(container.offsetWidth / 2), -5, container.offsetWidth, 10, static);
let ground = Bodies.rectangle(Math.floor(container.offsetWidth / 2), container.offsetHeight + 2, container.offsetWidth, 10, static);

// // add all of the bodies to the world
Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);

// add mouse control
const mouse = Mouse.create(container),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.8,
			render: {
				visible: false,
			},
		},
	});

Composite.add(engine.world, mouseConstraint);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function drawDOM() {
	skillBoxes.forEach((box) => box.show());
	requestAnimationFrame(drawDOM);
}

drawDOM();
