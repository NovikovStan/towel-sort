// You should implement your task here.

module.exports = 
function towelSort(matrix = []) {
    if (matrix.length != 0) {
        let matr = matrix.map((element, index) => {
            if (index % 2 == 0) return element.sort((a, b) => {
                if (a < b) return -1;
                else if (a > b) return 1;
                else return 0;
            });
            else return element.sort((a, b) => {
                if (a < b) return 1;
                else if (a > b) return -1;
                else return 0;
            });
        });
        return matr.flat(2);
    } else return [];
};
