export class Matrix {
  public grid: string

  constructor(grid: string) {
    this.grid = grid
  }

  get rows(): number[][] {
    return this.grid.split('\n').map(x => x.split(' ').map(y => parseInt(y)));
  }

  get columns(): number[][] {
    return this.rows[0].map((_, i) => {
      return this.rows.map((col, j) => {
        return col[i]
      })
    });
  }
}
