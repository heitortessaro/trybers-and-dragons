import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _numberOfMages = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    Mage._numberOfMages += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfMages;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}