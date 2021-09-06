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

const mageDamageMana = (mage) => {
  const totalMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...'
  }

  if(totalMana > 15) {
    const maxDamageAttack = Math.floor(Math.random() * (maxDamage - minDamage +1) + minDamage);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = maxDamageAttack;
    return turnStats
  }
  return turnStats
}

console.log(mageDamageMana(mage));

