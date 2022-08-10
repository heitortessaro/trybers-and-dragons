import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
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
    if (this.lifePoints < 0) return -1;
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
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

  // public levelUp(): void {
  //   console.log(` ANTES----------------------------
  //     this._strength: ${this._strength}
  //     this._dexterity ${this._dexterity}
  //     this._defense : ${this._defense}
  //     this._energy.amount: ${this._energy.amount}
  //     this._maxLifePoints: ${this._maxLifePoints},
  //     this._lifePoints: ${this._lifePoints}
  //     this._race.maxLifePoints: ${this._race.maxLifePoints},`);
  //   const variation = getRandomInt(1, 10);
  //   // this._maxLifePoints += variation;
  //   this._strength += getRandomInt(1, 10);
  //   this._dexterity += getRandomInt(1, 10);
  //   this._defense += getRandomInt(1, 10);
  //   this._energy.amount = 10;
  //   if ((this._maxLifePoints + variation) > this._race.maxLifePoints) { 
  //     this._maxLifePoints = this._race.maxLifePoints; 
  //     this._lifePoints = this._race.maxLifePoints;
  //   } else {
  //     this._lifePoints = this._maxLifePoints + variation;
  //     this._maxLifePoints += variation;
  //   }
  //   // if ((this._maxLifePoints + variation) > this._race.maxLifePoints) { 
  //   //   this._maxLifePoints = this._race.maxLifePoints; 
  //   //   this._lifePoints = this._race.maxLifePoints;
  //   // } else {
  //   //   this._maxLifePoints += variation;
  //   //   this._lifePoints = this._maxLifePoints;
  //   // }
  //   console.log(`DEPOIS----------------------------
  //     variation: ${variation}
  //     this._strength: ${this._strength}
  //     this._dexterity ${this._dexterity}
  //     this._defense : ${this._defense}
  //     this._energy.amount: ${this._energy.amount}
  //     this._maxLifePoints: ${this._maxLifePoints},
  //     this._lifePoints: ${this._lifePoints}
  //     this._race.maxLifePoints: ${this._race.maxLifePoints},`);
  // }

  // Um Character pode subir de nível através do método levelUp, e seus atributos 
  // (maxLifePoints, strength, dexterity, defense) ficarão no mínimo 1 ponto e no máximo 
  // 10 pontos maiores (sendo que lifePoints nunca poderá ser maior que o maxLifePoints da Race), 
  // sua vida ficará completamente cheia (lifePoints ficará igual ao novo maxLifePoints) 
  // e sua energia também ficará cheia (energy.amount será igual a 10)

  public special(enemy: Fighter): void {
    enemy.receiveDamage(
      (this._strength + this._dexterity) * getRandomInt(1, 4),
    );
  }
}