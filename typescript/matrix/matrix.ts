export class Matrix {
  public grid: string

  constructor(grid: string) {
    this.grid = grid
  }
  
  private _buildMatrix = (): number[][] => this.grid.split('\n').map(x => x.split(' ').map(y => parseInt(y)))

  get rows(): number[][] {
    return this._buildMatrix();
  }

  get columns(): number[][] {
    let matrix: number[][] = this._buildMatrix()

    return matrix[0].map((_, i) => {
      return matrix.map((col, j) => {
        return matrix[j][i]
      })
    });
  }
}
