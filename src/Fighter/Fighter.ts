import Energy from '../Energy';

// interface with optional function: https://thehotcode.com/typescript-declare-function-interface/
export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy:Fighter): void;
  special?(enemy:Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints:number):number;
}