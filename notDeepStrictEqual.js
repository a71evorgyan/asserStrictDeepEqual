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
  c: 3,
}
obj2.__proto__ = anotherObj;

const deepStrictEqual = (actual, expected) => {
	
	if(typeof(actual) === typeof(expected)) {
//////////////////////////////////////////////////////object
		if((actual instanceof Array || expected instanceof Array) && !(actual instanceof Array && expected instanceof Array))
		{
			console.log("mtav");
			return false;
		}
		if(typeof(actual) === 'object' && actual !== null && expected !== null ) {
			console.log("object type equation");
			for(let prop in actual) {
				console.log("in for loop")
				if(actual.hasOwnProperty(prop) !== expected.hasOwnProperty(prop)) {
					console.log("in hasOwnprop statement");
					return false;
				}
				// / if true hasownprop
			//&& Object.keys(actual).length === Object.keys(expected).length

				switch (typeof (actual[prop])) {
					//Deep compare objects
					
					case 'object':
					console.log("in switch object case");
		
						if (!deepStrictEqual(actual[prop], expected[prop])) {
							// console.log("recurtion", deepStrictEqual(actual[prop], expected[prop]));
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

				// if(typeof(actual[prop]) === 'object'){
				// 	console.log("actual[prop]", actual[prop]);
				// 	if(!deepStrictEqual(actual[prop], expected[prop])){
				// 		console.log("here");
				// 		return false;
				// 		break;
						
				// 	}
				// 	if(actual[prop] != expected[prop]){
				// 		console.log("object values equation");
				// 		return false;
				// 	}

				// }
				
				// break;
			}


			// console.log("actual elements :", Object.keys(actual).length);
			// console.log("expected elements :", Object.keys(expected).length);
				//Check object 2 for any extra properties(props)
			for (let p in expected) {
				// console.log("expected elements :", Object.keys(expected).length);
				console.log("elements of: ", expected[p]);
				console.log("another for");
				if (typeof (actual[p]) == 'undefined' ) {
					console.log("for checking prototype, proto");	
					return false;
				}
			}
			console.log("this one");
			return true;
		}

//&& !(actual instanceof Array)
		/////////////////////////////////////
	
		if(actual === expected){
			console.log("@stex");
			return true;
		}
		// if values is not the  same return false
		console.log("values are not the same")
		return false;
	}
	

	// if types is not the same return false
	console.log("types are not the same")
	return false;
	
	
}

// console.log(deepStrictEqual({a: 1}, {a: 1}));
// console.log(deepStrictEqual(1, 2));	
// console.log(deepStrictEqual(1, 1));
// console.log(deepStrictEqual(1, '1')); 
// console.log(deepStrictEqual(null, null));
// console.log(deepStrictEqual({a: {a: [1, 2]}}, {a: {a: [1, 2]}}));
// console.log(deepStrictEqual(['a'], {1: 'a'}));
console.log(deepStrictEqual(obj1, obj2));
// console.log(deepStrictEqual(['a', 'b', ['a']], ['a', 'b', ['a']]));

// console.log(deepStrictEqual({}, null));


const taza = {};
for(let i in taza){
	console.log("i", i);
}
console.log(Object.prototype);
































// ///////////////////////////


// var a = { blah: 1 };
// var b = { blah: 1 };
// var c = a;
// var d = { blah: 2 };

// Object.compare = function (obj1, obj2) {
// 	//Loop through properties in object 1
// 	for (var p in obj1) {
// 		//Check property exists on both objects
// 		if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
 
// 		switch (typeof (obj1[p])) {
// 			//Deep compare objects
			
// 			case 'object':
// 			console.log("in switch object case");

// 				if (!Object.compare(obj1[p], obj2[p])) {
// 					console.log("recurtion", Object.compare(obj1[p], obj2[p]));
// 					return false
// 				};
// 				console.log("recurtion", Object.compare(obj1[p], obj2[p]));
// 				break;
// 			//Compare function code
// 			// case 'function':
// 			// 	if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
// 			// 	break;
// 			//Compare values
// 			default:
// 				if (obj1[p] != obj2[p]) return false;
// 		}
// 	}
 
// 	//Check object 2 for any extra properties
// 	for (var p in obj2) {
// 		if (typeof (obj1[p]) == 'undefined') return false;
// 	}
// 	console.log("this true")
// 	return true;
// };

// console.log(Object.compare(a, b));  //true
// console.log(Object.compare(a, c));  //true
// console.log(Object.compare(a, d));  //false
// // console.log(compare(1, 2));  //true
// // console.log(Object.compare(a, c));  //true
// // console.log(Object.compare(a, d));  //false
// console.log(Object.compare({a: {a: 1}}, {a: {a: 1}}));
// console.log(Object.compare(obj1, obj2));