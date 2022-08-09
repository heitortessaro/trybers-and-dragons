import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static numberOfElfs = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.numberOfElfs += 1;
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.numberOfElfs;
  }
}
