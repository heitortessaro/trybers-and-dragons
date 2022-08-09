import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _numberOfWarriors = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Warrior._numberOfWarriors += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfWarriors;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}