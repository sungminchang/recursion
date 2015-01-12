// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var helper = function(objpiece) {
		if (objpiece === null) {
			return 'null';
		}

		if (Array.isArray(objpiece)) {
			var result = objpiece.reduce(function(JSON, curr, i, arr) {
				JSON += helper(curr);
				if (i !== arr.length - 1) {
					JSON += ',';
				}
				return JSON;
			}, '[');
			
			result += ']';
			return result;
		}

		if (typeof objpiece === undefined ||
			typeof objpiece === "function" ||
			typeof objpiece === "symbol") {
			return '';
		}

		if (typeof objpiece === "number" ||
			typeof objpiece === "boolean") {
			return objpiece.toString(); 
		}

		if (typeof objpiece === "string") {
			var result = '"' + objpiece + '"';
			return result;
		}

		if (typeof objpiece === "object") {
			var result = '{';
			for (var key in objpiece) {
				result += helper(key) + ':' + helper(objpiece[key]);
			}
			result += '}';			
			return result;
		};
	};

	//IF Array, loop through as an array,
	//IF Object, loop through as an object;

	var result = helper(obj);

	/* Don't think the following code is necessary anymore

	if (result.length === 1) {
		if (Array.isArray(result)) {
			result = result.slice(0, result.length - 2);
			result += ']';
		} else {
			result +=
		}
	}

	*/

	return result;
	/*
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
				JSON += '';
			} else if (typeof curr === "string") {
				JSON += '"' + curr + '"' + ',';
			} elseif (typeof)
			else {
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
	*/

  // your code goes here
};
