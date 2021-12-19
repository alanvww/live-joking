// Setup
function preload() {
	notification = loadSound('assets/noti.mp3');
	notification.setVolume(0.5);
}
function setup() {
	textFont('Comic Neue');
	createCanvas(1000, 750);
	background(200, 100, 100);
	fill(255);
	textStyle(BOLD);
	textAlign(CENTER);
	textSize(50);
	text(
		`It's ${hour()}:${minute()}, time for some jokes :D`,
		width / 2,
		(3.5 * height) / 8
	);
	textSize(30);
	text(`By Quristoff & Alan`, width / 2, (4.5 * height) / 8);
}

function draw() {}
