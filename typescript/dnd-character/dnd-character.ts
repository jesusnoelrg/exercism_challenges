export class DnDCharacter {
  public strength = DnDCharacter.generateAbilityScore();
  public constitution = DnDCharacter.generateAbilityScore();
  public dexterity = DnDCharacter.generateAbilityScore();
  public intelligence = DnDCharacter.generateAbilityScore();
  public wisdom = DnDCharacter.generateAbilityScore();
  public charisma = DnDCharacter.generateAbilityScore();

  private static throwDie(){
    return Math.floor(Math.random() * 6) + 1
  }

  public get hitpoints (){
    return 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    let values: Array<number> = Array.from({ length: 4}, () => this.throwDie())
    return values.reduce((a, b) => a + b, 0) - Math.min(...values);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor(((10 + abilityValue) / 2) - 10);
  }
}