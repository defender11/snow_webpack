import App from './js/App.js';

document.addEventListener('DOMContentLoaded', function(){
	let mainBlock = document.getElementById('olSnow');

	let canvas = document.createElement('canvas');
	canvas.setAttribute('id', 'olSnowCanvas');
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);

	mainBlock.append(canvas);

	const settings = {
		el: canvas,
		frameRate: 20,
		countUnits: 20,
        unitSpreading: { min: -15, max: 20 },
		color: '222,122,0'
	};

	let app = new App(settings);
	app.run();
});