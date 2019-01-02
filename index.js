import App from './js/App.js';

document.addEventListener('DOMContentLoaded', function(){
	let mainBlock = document.getElementById('olSnow');

	let canvas = document.createElement('canvas');
	canvas.setAttribute('id', 'olSnowCanvas');
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);
	canvas.setAttribute('x', 0);
	canvas.setAttribute('y', 0);

	mainBlock.append(canvas);

	canvas.addEventListener('mousemove', function (e) {
		this.setAttribute('x', e.offsetX);
		this.setAttribute('y', e.offsetY);
    });

	const settings = {
		el: canvas,
		frameRate: 20,
		countUnits: 100,
		color: '255,255,255'
	};

	let app = new App(settings);
	app.run();
});