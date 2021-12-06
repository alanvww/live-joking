//Overall Logistics
//Code a character
//LINE: an array with potential lines
//EMOTION: the emotion the character is in
//BEHAVIOR: the behavior the character is in
//SOUNDEFFECT: The real-time sound effect
//OBJECT

// pseudo container for elements
let notification;
let lineBase = [
	'Hi',
	'Hello',
	'Bye',
	'interesting',
	'Thats right',
	'I agree with you',
	"I don't agree with you",
	'ahhhuh',
	'my bad',
	'wait... what?',
	'yea thats cool',
	'I go running a lot',
	'For work',
	'I disagree with you political stance',
	'The answer is blowing in the wind',
	'Take a deep breath',
	'Walk outside',
	"Can't you go to sleep",
	'My pleasure',
	"Don't mention it.",
	'Always at your service.',
	'Yes I do',
	'I hate you',
	'There is nothing I can tell you',
	'Leave me alone',
	'We will die eventually',
	"Why don't you ask yourself",
	'Ha! never thought about that',
];
let ask = [
	"What's better, having high expectations or having low expectations?",
	'What do you think your life will look like in 10 years?',
];
let emotionBase = []; // emotionBase may need to use a enumeration
let randomVerb = RiTa.randomWord({ pos: 'vb' });
let behaviorBase = [
	'Accept',
	'Care',
	'Achieve',
	'Carry',
	'Admit',
	'Catch',
	'Affect',
	'Cause',
	'Afford',
	'Change',
	'Agree',
	'Check',
	'Allow',
	'Choose',
	'Answer',
	'Clear',
	'Apply',
	'Clean',
	'Argue',
	'Collect',
	'Arrange',
	'Come',
	'Arrive',
	'Complain',
	'Ask',
	'Complete',
	'Avoid',
	'Consist',
	'Become',
	'Contain',
	'Begin',
	'Continue',
	'Believe',
	'Contribute',
	'Build',
	'Control',
	'Buy',
	'Correct',
	'Call ',
	'Cost',
	'Could',
	'Enjoy',
	'Create',
	'Exist',
	'Cross',
	'Expect',
	'Cut',
	'Experience',
	'Damage',
	'Explain',
	'Deal',
	'Express',
	'Deliver',
	'Face',
	'Deny',
	'Fall',
	'Depend',
	'Feel',
	'Describe',
	'Find',
	'Destroy',
	'Finish',
	'Develop',
	'Fly',
	'Disappear',
	'Follow',
	'Discover',
	'Forget',
	'Do',
	'Forgive',
	'Dress',
	'Form',
	'Drink',
	'Get',
	'Drive',
	'Give',
	'Eat',
	'Go',
	'Encourage',
	'Grow',
	'Happen',
	'Learn',
	'Have',
	'Leave',
	'Hear',
	'Lend',
	'Help',
	'Like',
	'Hide',
	'Limit',
	'Hold',
	'Listen',
	'Hope',
	'Live',
	'Identity',
	'Look',
	'Imagine',
	'Love',
	'Improve',
	'Make',
	'Increase',
	'Matter',
	'Influence',
	'Mean',
	'Inform',
	'Measure',
	'Invite',
	'Meet',
	'Involve',
	'Mention',
	'Join',
	'Mind',
	'Keep',
	'Move',
	'Know',
	'Must',
	'Last',
	'Need',
	'Laugh',
	'Offer',
	'Open',
	'Regard',
	'Order',
	'Relate',
	'Own',
	'Release',
	'Pay',
	'Remember',
	'Perform',
	'Remove',
	'Play',
	'Repeat',
	'Point',
	'Replace',
	'Prefer',
	'Reply',
	'Prepare',
	'Report',
	'Press',
	'Result',
	'Prevent',
	'Return',
	'Produce',
	'Reveal',
	'Protect',
	'Rise',
	'Provide',
	'Run',
	'Push',
	'Save',
	'Reach',
	'Say',
	'Read',
	'See',
	'Receive',
	'Sell',
	'Record',
	'Send',
	'Reduce',
	'Set',
	'Share',
	'Tell',
	'Shoot',
	'Tend',
	'Show',
	'Think',
	'Sing',
	'Throw',
	'Sit',
	'Touch',
	'Sleep',
	'Train',
	'Smile',
	'Travel',
	'Sound',
	'Treat',
	'Speak',
	'Try',
	'Stand',
	'Turn',
	'Start',
	'Understand',
	'State',
	'Use',
	'Study',
	'Visit',
	'Succeed',
	'Wait',
	'Suggest',
	'Want',
	'Supply',
	'Walk',
	'Suppose',
	'Watch',
	'Survive',
	'Win',
	'Take',
	'Wonder',
	'Talk',
	'Write',
];
let cav;
let audienceLines = [];
let r, g, b, avgColor;

// character class
class character {
	constructor(name) {
		this.name = name;
		this.monologue = '';
		this.behavior = '';
		this.voice = new p5.Speech();
		this.show();
		this.voice.setVoice(11);
		this.emo;

		// the eyePosition will not change
		//this.leftEyePos = width/4-100;
		//this.rightEyePos = height/4+80;
	}

	show() {
		notification.play();
		cav = createCanvas(1000, 750);
		r = random(255);
		g = random(255);
		b = random(255);
		avgColor = (r + g + b) / 3;
		background(r, g, b);
		// name
		this.coloring('fill');
		textStyle(BOLD);
		textAlign(CENTER);
		textSize(45);
		text(this.name, width / 2, height / 8);
		// line
		textStyle(NORMAL);
		textAlign(CENTER);
		textSize(30);
		this.coloring('fill');
		text(this.monologue, (3 * width) / 4, height / 4);

		// behavior
		textStyle(ITALIC);
		textAlign(CENTER);
		textSize();
		this.coloring('fill');
		text(this.behavior, (3 * width) / 4, (3 * height) / 4);

		//emotion
		this.coloring('fill');
		noStroke();
		ellipse(width / 4 - 100, height / 4 + 80, 50, 50);
		ellipse(width / 4 + 100, height / 4 + 80, 50, 50);

		if (!this.emo) this.happy();
		else this.emo();
	}

	// Common saying
	greet() {
		this.say('Hi there');
		this.happy();
		clear();
		this.show();
	}

	farewell() {
		this.say('Bye');
		clear();
		this.show();
	}

	// Voice selector
	female() {
		this.voice.setVoice(6);
	}

	male() {
		this.voice.setVoice(11);
	}

	// Speak up
	sayItLoud() {
		this.voice.speak(this.monologue);
	}

	// Commands
	say(input = rLine()) {
		this.monologue = input;
		clear();
		this.show();
		this.sayItLoud();
	}

	do(behavior = rBehavior()) {
		this.behavior = behavior;
		clear();
		this.show();
	}

	hysteria() {
		let allEmo = [
			this.moderateFace,
			this.sadFace,
			this.happyFace,
			this.cryFace,
			this.moeFace,
			this.naniFace,
		];
		this.emo = allEmo[floor(random(allEmo.length))];
		clear();
		this.show();
	}

	// Emos
	moderate() {
		this.emo = this.moderate;
		clear();
		this.show();
	}

	sad() {
		this.emo = this.sadFace;
		clear();
		this.show();
	}

	happy() {
		this.emo = this.happyFace;
		clear();
		this.show();
	}

	cry() {
		this.emo = this.cryFace;
		clear();
		this.show();
	}

	moe() {
		this.emo = this.moeFace;
		clear();
		this.show();
	}

	nani() {
		this.emo = this.naniFace;
		clear();
		this.show();
	}

	// Face Drawing methods
	moderateFace() {
		push();
		this.coloring('stroke');
		strokeWeight(10);
		line(
			cav.width / 4 - 50,
			cav.height / 2,
			cav.width / 4 + 50,
			cav.height / 2
		);
		pop();
	}

	sadFace() {
		push();
		this.coloring('stroke');
		strokeWeight(10);
		noFill();
		arc(cav.width / 4, cav.height / 2, 150, 50, PI, 0);
		pop();
	}

	happyFace() {
		push();
		this.coloring('stroke');
		strokeWeight(10);
		noFill();
		arc(cav.width / 4, cav.height / 2, 150, 50, 0, PI);
		pop();
	}

	cryFace() {
		push();
		this.coloring('stroke');
		strokeWeight(10);
		noFill();
		arc(cav.width / 4, cav.height / 2, 150, 50, PI, 0);
		pop();
	}

	moeFace() {
		push();
		this.coloring('stroke');
		strokeWeight(10);
		noFill();
		arc(cav.width / 4 - 75 / 2, cav.height / 2, 75, 50, 0, (7 * PI) / (1 * 6));
		arc(cav.width / 4 + 75 / 2, cav.height / 2, 75, 50, -PI / (2 * 3), PI);
		pop();
	}

	naniFace() {
		push();
		this.coloring('stroke');
		strokeWeight(10);
		noFill();
		arc(cav.width / 4, cav.height / 2, 100, 50, 0, PI * 2);
		pop();
	}

	// Miscs
	coloring(mode) {
		if (mode == 'stroke') {
			if (avgColor > 160) stroke(40);
			else stroke(255);
		} else if (mode == 'fill') {
			if (avgColor > 160) fill(40);
			else fill(255);
		}
	}
}

//Random methods
function rBehavior() {
	return behaviorBase[floor(random(behaviorBase.length))];
}

function rEmotion() {
	[sad, happy][floor(random(0, 2))]();
}

function rLine() {
	monologue = lineBase[floor(random(0, lineBase.length))];
	return monologue;
}
