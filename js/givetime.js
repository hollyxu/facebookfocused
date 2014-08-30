// Give a certain amount of time
var giveOne = document.getElementById('giveOne');
var giveSix = document.getElementById('giveSix');

var giveTime = function(minutes) {
	alert('Giving you ' + minutes + ' minutes');
};

giveOne.addEventListener('click', function() { giveTime(1); });
giveSix.addEventListener('click', function() { giveTime(6); });
