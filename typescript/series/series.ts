export class Series {
  private series: string;

  constructor(series: string) {
    this.series = series;
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (this.series === '') throw new Error('series cannot be empty')
    if (this.series.length < sliceLength) throw new Error('slice length cannot be greater than series length');

    const result: number[][] = [];
    
    let digits = [...this.series].map(Number);
    let maxIteractions = (digits.length - sliceLength) + 1

    for (let i = 0; i < maxIteractions; i++) {
      result.push(digits.slice(i, sliceLength));
      sliceLength++;
    }

    return result;
  }
}
