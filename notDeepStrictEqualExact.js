const assert = require('assert');
const obj1 = {
  a: {
    b: 1,
	},
	func: (a) => {return a;}
};
const obj2 = {
  a: {
		b: 1,
	},
	func: (a) => {return a ;}
};

const anotherObj = {
  b: 3,
}
obj2.__proto__ = anotherObj;



const deepStrictEqual = (actual, expected) => {
	
	if(typeof(actual) === typeof(expected)) {
//////////////////////////////////////////////////////object
		if(typeof(actual) === 'object' && actual !== null  && expected !== null) {
			console.log("object type equation");
			for(let prop in actual) {
				console.log("in for loop")
				if(actual.hasOwnProperty(prop) !== expected.hasOwnProperty(prop)) {
					console.log("in hasOwnprop statement");
					return false;
				}
				// / if true hasownprop
			

				switch (typeof (actual[prop])) {
					//Deep compare objects
					
					case 'object':
					console.log("in switch object case");
		
						if (!deepStrictEqual(actual[prop], expected[prop])) {
							console.log("recurtion", deepStrictEqual(actual[prop], expected[prop]));
							return false
						};
							console.log("recurtion", deepStrictEqual(actual[prop], expected[prop]));
						break;
					
					case 'function':
						console.log("function equation");
						if (typeof (expected[prop]) == 'undefined' || (actual[prop].toString().replace(/\s/g,'') != expected[prop].toString().replace(/\s/g,''))) return false;
						break;

					default:
						if (actual[prop] != expected[prop]) return false;
				}

			}

				//Check object 2 for any extra properties(props)
			for (let prop in expected) {
				if (typeof (actual[prop]) == 'undefined' && !(actual instanceof Array)) {
					console.log("for checking prototype, proto");	
					return false;
				}
			}
			console.log("this one");
			return true;
		}


	
		if(actual === expected){
			return true;
		}
		// if values is not the  same return false
		console.log("valeues is not the same")
		return false;
	}
	

	// if types is not the same return false
	console.log("types is not the same")
	return false;
	
	
}

console.log(deepStrictEqual({a: 1}, {a: 1}));
console.log(deepStrictEqual(1, 2));	
console.log(deepStrictEqual(1, 1));
console.log(deepStrictEqual(1, '1')); 
console.log(deepStrictEqual(null, undefined));
console.log(deepStrictEqual({a: {a: 1}}, {a: {a: 1}}));
console.log(deepStrictEqual([1, [2]], [1, [2]]));
console.log(deepStrictEqual(obj1, obj2));