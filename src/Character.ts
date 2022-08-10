import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  public name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  
  constructor(
    name:string,
    race:Race = new Elf('Forgoteen', 1),
    archetype: Archetype = new Mage('Forgoteen'),
  ) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = race.maxLifePoints / 2;
    // this._lifePoints = Math.floor(this._maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: archetype.energyType,
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  // public get energy(): Energy {
  //   const energyTemp:Energy = {
  //     type_: this._energy.type_,
  //     amount: this._energy.amount,
  //   };
  //   return energyTemp;
  // }
  public get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  public receiveDamage(attackPoints:number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this.lifePoints < 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: SimpleFighter): void {
    enemy.receiveDamage(
      (this._strength + this._dexterity) * getRandomInt(1, 4),
    );
  }
}