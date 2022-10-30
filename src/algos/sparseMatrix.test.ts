import { CSR, sparseMatrixFromCSR, sparseMatrixToCSR } from './sparseMatrix';

interface Sample {
  to: CSR;
  from: number[][];
}

describe('sparseMatrix', () => {
  it('should return a sparse matrix represented as row,col,val', () => {
    const sample1: Sample = {
      from: [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
      ],
      to: {
        shape: [3, 3],
        col: [2, 1, 0],
        row: [0, 1, 2],
        value: [1, 1, 1],
      },
    };
    expect(sparseMatrixToCSR(sample1.from)).toEqual(sample1.to);
    expect(sparseMatrixFromCSR(sample1.to)).toEqual(sample1.from);

    const sample2: Sample = {
      from: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 1, 0, 0, 0, 0, 0],
        [1, 2, 0, 1, 0, 0, 0, 0, 0],
      ],
      to: {
        shape: [3, 9],
        col: [2, 3, 0, 1, 3],
        row: [1, 1, 2, 2, 2],
        value: [3, 1, 1, 2, 1],
      },
    };
    expect(sparseMatrixToCSR(sample2.from)).toEqual(sample2.to);
    expect(sparseMatrixFromCSR(sample2.to)).toEqual(sample2.from);
  });
});
