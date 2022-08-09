import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _numberOfNecromancers = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Necromancer._numberOfNecromancers += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfNecromancers;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}