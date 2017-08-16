$(document).ready(function(){
	
	$('#neonHeading').novacancy({
	'reblinkProbability': 0.1,
	'blinkMin': 0.2,
	'blinkMax': 0.6,
	'loopMin': 8,
	'loopMax': 10,
	'color': '#ffffff',
	'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff'],
	'off': 0,
	'blink': 1,
	'classOn': 'on',
	'classOff': 'off',
	'autoOn': true
	});
});
