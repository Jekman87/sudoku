module.exports = function solveSudoku(matrix) {
  let row = 0;
  let col = 0;
  
  if(!findEmptyCell(matrix)) return matrix;
  
  for (let number=1; number<10; number++) {
    
    if(isNumberOk(matrix, number)) {
      matrix[row][col] = number;
      
      if (solveSudoku(matrix)) return matrix;

      matrix[row][col] = 0;
    } 
    
  }
  return false;

  //поиск пустой ячейки
  function findEmptyCell(matrix) {
    for (; row<9; row++) {
      for (; col<9; col++) {
        if (matrix[row][col] === 0) return true;
      }
      col = 0;
    }
    return false;
  }

  function isNumberOk(matrix, number) {
    
    //проверка строки и столбца на наличие в ней number
    for (let i=0 ; i<9; i++) {
      
      if(matrix[row][i] === number) return false;
      if(matrix[i][col] === number) return false;

    }

    //проверка блока 3х3 на наличие number
    for (let i=0 ; i<3; i++) {
      for (let j=0 ; j<3; j++) {

        if(matrix[row-row%3+i][col-col%3+j] === number) return false;

      }
    }

    return true;  
  }
}