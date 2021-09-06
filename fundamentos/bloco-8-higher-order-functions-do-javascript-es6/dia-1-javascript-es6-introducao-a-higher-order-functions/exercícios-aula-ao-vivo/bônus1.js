const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (minDamage, maxDamage) => {
  minDamage = 15;
  maxDamage = Math.floor(Math.random() * (50 - minDamage +1) + minDamage);

  return maxDamage;
}

console.log(dragonDamage());