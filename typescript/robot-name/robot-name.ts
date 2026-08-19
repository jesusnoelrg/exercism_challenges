export class Robot {
  private static namesUsed = new Set<string>;
  private _name: string = ''; 

  constructor() {}

  public get name(): string {
    if (this._name === '') this._name = this.generateNameRandom();
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateNameRandom();
  }

  public static releaseNames(): void {
    this.namesUsed.clear();
  }

  private generateCharacterRandom (type: TypeRandom): string {
    let characters = type;
    const random = Math.floor(Math.random() * characters.length);

    return characters[random];
  }

  private generateNameRandom (): string {
    let generated: string;

    do {
      let letters = '';
      let numbers = '';

      for (let i = 0; i < 3; i++) {
        if (i < 2) letters += this.generateCharacterRandom(TypeRandom.Letter);
        numbers += this.generateCharacterRandom(TypeRandom.Number);
      }

      generated = letters + numbers;
    }while (Robot.namesUsed.has(generated))

    Robot.namesUsed.add(generated);

    return generated;
  }
}

enum TypeRandom {
  Letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
  Number = '0123456789'
}
