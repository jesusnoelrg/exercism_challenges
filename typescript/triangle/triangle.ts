export class Triangle {
  constructor(
    private readonly a: number,
    private readonly b: number,
    private readonly c: number
  ) {}

  private sides = (): Array<number> => Array.of(this.a, this.b, this.c); 
  private isNotTriangle = (): boolean => {
    const [lado_a, lado_b, largo] = this.sides().sort((x, y) => x - y);
    return lado_a + lado_b <= largo || this.sides().some(x => x === 0);
  }
  private sidesDuplicates = (): number => new Set(this.sides()).size;

  get isEquilateral(): boolean {
    return !this.isNotTriangle() && this.sidesDuplicates() === 1
  }

  get isIsosceles(): boolean {
    if (this.isNotTriangle() && this.sidesDuplicates() !== 2) return false;
    let maxN = this.sides().reduce((max, n) => max > n ? max : n);

    return this.sides().filter(x => x !== maxN).length === 1 || this.sidesDuplicates() === 1;
  }

  get isScalene(): boolean {
    return this.sidesDuplicates() === 3 && !this.isNotTriangle();
  }
}
