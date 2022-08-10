import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';
import { Dwarf, Elf, Orc } from './Races';
import getRandomInt from './utils';
import { Mage, Warrior } from './Archetypes';

// Players
const playersNames: string[] = ['baixinho', 'pantanoso', 'elfredo'];
const player1 = new Character(
  playersNames[0],
  new Dwarf(playersNames[0], getRandomInt(1, 10)),
  new Warrior(playersNames[0]),
);
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
const player2 = new Character(
  playersNames[1],
  new Orc(playersNames[1], getRandomInt(1, 10)),
  new Warrior(playersNames[1]),
);
const player3 = new Character(
  playersNames[2],
  new Elf(playersNames[2], getRandomInt(1, 10)),
  new Mage(playersNames[2]),
);

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

// Battles 
const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);
// const battles: Battle[] = [pvp, pve];

// call Battles
function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };