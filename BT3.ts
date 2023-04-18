function matrixElementsSum(matrix) {
    let totalCost = 0;
    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    for (let i = 0; i < colLength; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (matrix[j][i] === 0) {
                break;
            } else {
                totalCost += matrix[j][i];
            }
        }
    }
    return totalCost;
}
let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));