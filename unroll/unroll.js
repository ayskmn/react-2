// const squareArray = [
// 	[1, 2, 3, 4],
// 	[5, 6, 7, 8],
// 	[9, 10, 11, 12],
// 	[13, 14, 15, 16]
// ];


function unroll(squareArray) {
	const result = [];
	const rowCount = squareArray.length;
	const columnCount = squareArray[0].length;

	let startRow = 0;
	let endRow = rowCount - 1;
	let startColumn = 0;
	let endColumn = columnCount - 1;

	while( endRow >= startRow && endColumn >= startColumn) {
		for(let column = startColumn; column <= endColumn; column ++) {
			result.push(squareArray[startRow][column]);
		}

		startRow++;

		for(let row = startRow; row <= endRow; row++) {
			result.push(squareArray[row][endColumn])
		}

		endColumn--;

		for(let column = endColumn; column >= startColumn; column--){
			result.push(squareArray[endRow][column])
			// console.log(squareArray[endRow][column])
		}

		endRow--;

		//startRow == 1
		//endRow == 2
		for(let row = endRow; row >= startRow; row--) {
			result.push(squareArray[row][startColumn]);
			// console.log(squareArray[row][startColumn])
		}

		startColumn++;
		
		//this causes infinite loop 
		// for(let column = startColumn; column >= endColumn; column++){
		// 	console.log(squareArray[startRow][column])
		// }
		

		return result;

		//the middle part of the array is missing. [...6,7,11,10]

	}

}

module.exports = unroll;
