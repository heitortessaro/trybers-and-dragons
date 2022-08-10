import { SimpleFighter } from './Fighter';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

function getRandomEnemy(array:SimpleFighter[]): number {
  const numberOfEnemies:number = array.length;
  const enemyNumber = Math.floor(Math.random() * numberOfEnemies);
  return enemyNumber;
}

export default getRandomInt;

export { getRandomEnemy };
