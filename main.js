$(document).ready(function(){	
})

function parsing_array(array) {
	var plug_jQuery = function() {
		var jQuery_script = document.createElement("script");
	    jQuery_script.type = "text/javascript";
	    jQuery_script.src = "//code.jquery.com/jquery-3.1.1.min.js";
	    var head_var = document.getElementsByTagName('head')[0] || new_doc.document.head;	
	    head_var.appendChild(jQuery_script);
	}

	var new_doc = window.open("");
	new_doc.document.write("<html><head><title>testpage</title></head><body></body></html>");
	
	parsing_array.plug_jQuery(head_var);
}