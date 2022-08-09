import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static numberOfOrcs = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.numberOfOrcs += 1;
    this._maxLifePoints = 74;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.numberOfOrcs;
  }
}
