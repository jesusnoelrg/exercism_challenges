export class Triangle {
  public sides: number[]

  constructor(
    ...sides: number[]
  ) {
    this.sides = sides
  }

  private isNotTriangle = (): boolean => {
    const [lado_a, lado_b, largo] = this.sides.sort((x, y) => x - y);
    return lado_a + lado_b <= largo;
  }
  private sidesDuplicates = (): number => new Set(this.sides).size;

  get isEquilateral(): boolean {
    return !this.isNotTriangle() && this.sidesDuplicates() === 1
  }

  get isIsosceles(): boolean {
    return !this.isNotTriangle() && this.sidesDuplicates() <= 2;
  }

  get isScalene(): boolean {
    return !this.isNotTriangle() && this.sidesDuplicates() === 3;
  }
}
