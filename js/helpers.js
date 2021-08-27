const colors = ["vanilla", "chocolate", "lemon", "berry"];

export const arrayToStringFormatter = (arr) => {
	const last = arr.pop();
	return `${arr.join(', ')} and ${last}`;
}

// console.log(arrayToStringFormatter(colors));

export function firstLetterCase(str) {
	return (str.charAt(0).toUpperCase() + str.slice(1));
 }

 ////////////////////////////////////////////////////


const newColors = []

function updateColorName(str) {
	// console.log("str", str)
	newColors.push(firstLetterCase(str))
}

//The forEach() method calls a function once for each element in an array, in order.
colors.forEach(updateColorName)

// or it could be written with an anonymous function
// colors.forEach(str => {
// 	newColors.push(firstLetterCase(str))
// })

console.log("new Colors", arrayToStringFormatter(newColors));

/////////////////////////////////////


const colorClassArray = ['Dark', 'Medium', 'Lite'];
let colorCount = 0;
export const cycleBackgroundColor = () => {
	const variant = colorClassArray[colorCount];
	//ternary statement
	//this could also be written as a conditional with if else
	colorCount < colorClassArray.length - 1 ? colorCount++ : colorCount = 0;
	return variant.toLowerCase();
}