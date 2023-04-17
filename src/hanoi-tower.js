const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
let seconds=0, turns=0;
let turnSpeedSec;
function calculateHanoi(/*disksNumber, turnsSpeed*/) 
{
  throw new NotImplementedError('Not implemented');
  // turnSpeedSec=3600/turnsSpeed;
  // towerCalc(disksNumber);
  // seconds=Math.floor(seconds);
  // return {turns,seconds};
}
function towerCalc(n)
{
  if (n == 0)
  {
    return;
  }
  towerCalc(n - 1);
  turns++;
  seconds+=turnSpeedSec;
  towerCalc(n - 1);
}

module.exports = {
  calculateHanoi
};
