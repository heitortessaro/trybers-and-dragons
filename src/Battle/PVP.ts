// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    // let counter = 0;
    // console.log('ANTES');
    // console.log(this.player.lifePoints);
    // console.log(this._player2.lifePoints);
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      // console.log('------------');
      // console.log(this.player.lifePoints);
      // console.log(this._player2.lifePoints);
      // console.log('------------');
      // counter += 1;
      // if (counter > 10) {
      //   console.log(this.player.lifePoints);
      //   console.log(this._player2.lifePoints);
      //   break;
      // }
    }
    // console.log('Depois');
    // console.log(this.player.lifePoints);
    // console.log(this._player2.lifePoints);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
