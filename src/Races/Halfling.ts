import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static numberOfHalflings = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.numberOfHalflings += 1;
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    return this.numberOfHalflings;
  }
}
