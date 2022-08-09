import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _numberOfRangers = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Ranger._numberOfRangers += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfRangers;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}