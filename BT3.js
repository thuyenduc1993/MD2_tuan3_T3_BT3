function matrixElementsSum(matrix) {
    var totalCost = 0;
    var rowLength = matrix.length;
    var colLength = matrix[0].length;
    for (var i = 0; i < colLength; i++) {
        for (var j = 0; j < rowLength; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            else {
                totalCost += matrix[j][i];
            }
        }
    }
    return totalCost;
}
var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));
