// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (obj === null) {
		return 'null';
	}

	if (typeof obj === "string") {
		var result = '';
		result += '"' + obj + '"';
		return result;
	}

	if (typeof obj !== "object") {
		return obj.toString();
	};

	if (Array.isArray(obj)) {
		var result = obj.reduce(function(JSON, curr, i, arr) {
			if (typeof curr === undefined ||
				typeof curr === "function" ||
				typeof curr === "symbol") {
			} else if (typeof curr === "string") {
				JSON += '"' + curr + '"' + ',';
			} else {
				JSON += curr + ',';
				alert(typeof curr + ": " + curr);
			}

			return JSON;

		}, '[');

		if (result === '[') {
			return '[]';
		}
		alert(result);
		result = result.slice(0, result.length - 1);
		result += ']';
		alert(result + "executed");
		return result;
	}

	if (typeof obj === "object") {

		var result = obj.reduce(function(JSON, curr, i, arr) {
			JSON += curr;
			return JSON;
		}, '{');

		for (var key in obj) {
			result += '"' + key + '"' + ':' + obj[key] + ',' ;
		}

		if (result === '{') {
			return '{}';
		}

		result = result.slice(0, result.length - 1);
		result += '}';
		alert(result);

		return result;
	}

  // your code goes here
};
