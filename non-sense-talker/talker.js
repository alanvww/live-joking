let model;
let result = 'Press Generate';

function setup() {
	createCanvas(400, 400);

	// load the Model
	model = new rw.HostedModel({
		url: 'https://gpt-2-55a79cf7.hosted-models.runwayml.cloud/v1/',
		token: 'Q1+r8bom2Q6yThE4Uwnolg==',
	});

	//
	var button = createButton('Generate');
	button.mousePressed(askRunway);
}

function draw() {
	background(0);
	fill(255);
	rectMode(CENTER);
	text(result, width / 2, height / 2, width - 50, height - 20);
}

function askRunway() {
	const inputs = {
		prompt: 'What will you say if',
		max_characters: 500,
		top_p: 1,
		seed: 2,
	};
	model.query(inputs).then(output);
}

function output(results) {
	result = results.generated_text;
	console.log(result);
}
