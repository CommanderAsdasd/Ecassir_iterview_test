//test data
var bar = function() {}; 
foo = {test : "5", lol : 55};
var a = [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, , function () { }, {}, [], 15, 55, 4];

function divisibility_check(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "fizzbuzz"; 
	} 
	else if (number % 3 === 0) {
		return "fizz"; 
	}
	else if (number % 5 === 0) {
		return "buzz"; 
	}
	else {
		return number; 
	} 
};

function string_check(string) {
	if (string) {
		return string;
	} 
	else {
		return "string is empty"
	}
};
function place_to_page(processed_array) {
	$("body").append("<div class=\"container\"></div>");
	for (i in processed_array) {		
	$(".container").append("<div class=\"inner_block\">" + processed_array[i] + "</div>");
	}
};

	function parsing_array(input_array) {
	var curr_element;
	var appended_text = [];
	for (var i = 0; i < input_array.length; i++) {
		curr_element = input_array[i];
		if (typeof(curr_element) === "number") {
			appended_text[i] = divisibility_check(curr_element);
		}
		else if (typeof(curr_element) === "string") {
			appended_text[i] = string_check(curr_element);
		}
		else if (typeof(curr_element) === "function") {
			appended_text[i] = "element is function";
		}
		else if (typeof(curr_element) === "object" && curr_element !== null && !Array.isArray(curr_element)) {
			appended_text[i] = "element is Object";
		}
		else if (Array.isArray(curr_element)) {
			appended_text[i] = "element is Array";
		}
		else if (typeof(curr_element) === "undefined")
			appended_text[i] = "element is Undefined";
		else if (curr_element === null) {
			appended_text[i] = "element is null";
		}
	}
	place_to_page(appended_text);
};

$(document).ready(function(){
});
