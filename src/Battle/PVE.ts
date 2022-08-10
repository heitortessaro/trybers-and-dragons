import Fighter, { SimpleFighter } from '../Fighter';
// import { getRandomEnemy } from '../utils';
// import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[];
  
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    // console.log('-------INICIO PVE---------');
    // const jogadores = [...this._monsters, this.player];
    // jogadores.map((j) => console.log(`${j.lifePoints}`));
    while (
      this.player.lifePoints > 0 
      && this._monsters.every((m) => m.lifePoints > 0)) {
      // const enemyNumber = getRandomEnemy(this._monsters);
      // this.player.attack(this._monsters[enemyNumber]);
      // this._monsters = this._monsters.filter((m) => m.lifePoints > 0);
      const enemyIndex = this._monsters.findIndex((m) => m.lifePoints > 0);
      this.player.attack(this._monsters[enemyIndex]);
      this._monsters.forEach((m) => m.attack(this.player));
      // console.log('-------DURANTE---------');
      // [...this._monsters, this.player]
      //   .map((j) => console.log(`${j.lifePoints}`));
    }
    // console.log('-------DEPOIS---------');
    // const jogadoresFINAL = [...this._monsters, this.player];
    // jogadoresFINAL.map((j) => console.log(`${j.lifePoints}`));
    // console.log('-------FIM PVE---------');
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}