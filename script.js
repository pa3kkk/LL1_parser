var stack = ["#"];
var word_a = [];

function loadFunction(){
	var word = document.getElementById("word").value;
	document.getElementById("result").innerHTML = "";

	word_a = [];
	stack = ["#", "url"];

	while(word.length > 0 ){
		
		if(word.startsWith("http://")){
			word = word.substring("http://".length);
			word_a.push("http://");
		} else if(word.startsWith("ftp://")){
			word = word.substring("ftp://".length);
			word_a.push("ftp://");
		} else if(word.startsWith("telnet://")){
			word = word.substring("telnet://".length);
			word_a.push("telnet://");
		} else if(word.startsWith("mailto::")){
			word = word.substring("mailto::".length);
			word_a.push("mailto::");
		} else if(word[0].match(/[0-9]/)){
			word = word.substring(1);
			word_a.push("num");
		} else if(word[0].match(/[a-z]/i)){
			word = word.substring(1);
			word_a.push("lett");
		} else if(word[0].match(/\?|\@|\:|\+|\.|\//)){
			word_a.push(word[0]);
			word = word.substring(1);
		} else{
			word_a = [];
			document.getElementById("result").innerHTML = "Incorrect word!";
			return;
		}

		console.log(word_a[word_a.length -1]);
	}

	word_a.push("$");
}

function loadFixFunction(){
	var word = document.getElementById("word").value;
	document.getElementById("result").innerHTML = "";

	word_a = [];
	stack = ["#", "url"];

	while(word.length > 0 ){
		
		if(word.startsWith("http://")){
			word = word.substring("http://".length);
			word_a.push("http://");
		} else if(word.startsWith("ftp://")){
			word = word.substring("ftp://".length);
			word_a.push("ftp://");
		} else if(word.startsWith("telnet://")){
			word = word.substring("telnet://".length);
			word_a.push("telnet://");
		} else if(word.startsWith("mailto::")){
			word = word.substring("mailto::".length);
			word_a.push("mailto::");
		} else if(word[0].match(/[0-9]/)){
			word = word.substring(1);
			word_a.push("num");
		} else if(word[0].match(/[a-z]/i)){
			word = word.substring(1);
			word_a.push("lett");
		} else if(word[0].match(/\?|\@|\:|\+|\.|\//)){
			word_a.push(word[0]);
			word = word.substring(1);
		} else{
			document.getElementById("result").innerHTML = "Word is fixed!";
			word = word.substring(1);
		}

		console.log(word_a[word_a.length -1]);
	}

	word_a.push("$");
}


function debugFunction() {

	console.log("------------------------------------");
	// if any word is loaded
	if(!word_a[0]){
		document.getElementById("result").innerHTML = "Pleas, insert word.";
		return;
	}

	var s = stack.pop();
	var q = word_a[0];

	console.log("Stack: " + s + " | Queue: " + q);
	// correct word
	if(s == "#"){
		if(q == "$"){
			document.getElementById("result").innerHTML = "Correct word!";
			stack.push("#");
		} else{
			document.getElementById("result").innerHTML = "Incorrect word!";	
		}
		return;
	}

	// end of the stack or queue
	if(	!q || !s ){
		console.log("one of them is empty");
		document.getElementById("result").innerHTML = "Incorrect word!";
		return;
	}

	var rule = array[s][q];

	// if rule == POP , than shift from queue
	if(rule == "POP"){
		console.log("POP");
		word_a.shift();
		return;
	}

	if(rule == null){
		console.log("its null");
		document.getElementById("result").innerHTML = "Incorrect word!";
		word_a = [];
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

function checkFunction() {

	// if any word is loaded
	if(!word_a[0]){
		document.getElementById("result").innerHTML = "Pleas, load word.";
		return;
	}

	while(true){
		var s = stack.pop();
		var q = word_a[0];

		// correct word
		if(s == "#"){
			if(q == "$"){
				document.getElementById("result").innerHTML = "Correct word!";
				stack.push("#");
			} else{
				document.getElementById("result").innerHTML = "Incorrect word!";	
			}
			return;
		}

		// end of the stack or queue
		if(	!q || !s ){
			document.getElementById("result").innerHTML = "Incorrect word!";
			return;
		}

		var rule = array[s][q];

		// if rule == POP , than shift from queue
		if(rule == "POP"){
			word_a.shift();
		} else if(rule == null){
			console.log("its null");
			document.getElementById("result").innerHTML = "Incorrect word!";
			word_a = [];
			return;
		} else if(rule == "ε"){

		} else{
			for (var i = rule.length - 1; i >= 0; i--) {
				stack.push(rule[i]);
			}
		}
	}
}	 