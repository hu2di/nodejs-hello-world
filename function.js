function say(word) {
	console.log(word);
}

function execute(say, word) {
	say(word);
}

execute(say, "Hello");

execute(function (word){console.log(word)}, "Bye bye bye!");