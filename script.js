var stack = [];
stack.push("#");
stack.push("S");

// var word = ["a", "b", "c", "$"];
var word = ["a", "c", "a", "d", "$"];
var array = {

	"S": {	"a": "aB", 
			"b": null,
			"c": null,
			"d": "daC",
			"$": "ε" 
		},
	"A": {	"a": "aA", 
			"b": null,
			"c": "ε",
			"d": null,
			"$": "ε" 
		},
	"B": {	"a": "AcaC", 
			"b": "bAc",
			"c": "AcaC",
			"d": null,
			"$": null 
		},
	"C": {	"a": "aAcA", 
			"b": null,
			"c": null,
			"d": "dA",
			"$": null 
		},
	"a": {	"a": "POP", 
			"b": null,
			"c": null,
			"d": null,
			"$": null 
		},	
	"b": {	"a": null, 
			"b": "POP",
			"c": null,
			"d": null,
			"$": null 
		},
	"c": {	"a": null, 
			"b": null,
			"c": "POP",
			"d": null,
			"$": null 
		},	
	"d": {	"a": null, 
			"b": null,
			"c": null,
			"d": "POP",
			"$": null 
		}
};


function myFunction() {
	var s = stack.pop();
	var q = word[0];

console.log("Stack: " + s + " | Queue: " + q);
	// correct word
	if(s == "#" && q == "$"){
		document.getElementById("result").innerHTML = "Correct word!";
		stack.push("#");
		return;
	}

	// end of the stack or queue
	console.log()
	if(	!q || !s ){
		document.getElementById("result").innerHTML = "Incorrect word!";
		return;
	}


	console.log("Stack: " + s + " | Queue: " + q);
	var rule = array[s][q];

	// if rule == POP , than shift from queue
	if(rule == "POP"){
		console.log("POP");
		word.shift();
		return;
	}

	if(rule == null){
		document.getElementById("result").innerHTML = "Incorrect word!";
		word = [];
		return;
	}

	if(rule == "ε"){
		console.log("empty word: ε");
		return;
	}

	for (var i = rule.length - 1; i >= 0; i--) {
		console.log(rule[i]);
		stack.push(rule[i]);
	}
}	 