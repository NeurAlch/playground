// This is a modified version of the original compressed sparse matrix implementation that uses a shape
export interface CSR {
  col: number[];
  row: number[];
  value: number[];
  shape: [number, number];
}

export const sparseMatrixToCSR = (matrix: number[][]): CSR => {
  const csr: CSR = {
    row: [],
    col: [],
    value: [],
    shape: [0, 0],
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        csr.row.push(i);
        csr.col.push(j);
        csr.value.push(matrix[i][j]);
      }
    }
  }

  csr.shape = [matrix.length, matrix[0].length];

  return csr;
};

export const sparseMatrixFromCSR = (obj: CSR): number[][] => {
  const matrix: number[][] = Array(obj.shape[0])
    .fill(0)
    .map(() => Array(obj.shape[1]).fill(0));
  for (let i = 0; i < obj.row.length; i++) {
    matrix[obj.row[i]][obj.col[i]] = obj.value[i];
  }
  return matrix;
};
