// Your code here.

const makeBoss = function(enemy) {
  const newEnemy = {
    name: enemy.name,
    hitPoints: enemy.hitPoints,
    attackDamage: enemy.attackDamage,
    level: enemy.level,
    alive: enemy.alive,
    boss: true,
  }

  return newEnemy;
}

const levelUp = function(enemy) {
  const newEnemy = {
    name: enemy.name,
    hitPoints: enemy.hitPoints,
    attackDamage: enemy.attackDamage,
    alive: enemy.alive,
    boss: enemy.boss,
    level: enemy.level + 1,
  }

  return newEnemy;
}

const buff = function(enemy) {
  const newEnemy = {
    name: enemy.name,
    hitPoints: enemy.hitPoints,
    alive: enemy.alive,
    boss: enemy.boss,
    level: enemy.level,
    attackDamage: enemy.attackDamage + 15, 
  }

  return newEnemy;
}

const makeSuper = function(enemy) {
  const newEnemy = {
    hitPoints: enemy.hitPoints,
    alive: enemy.alive,
    boss: enemy.boss,
    level: enemy.level,
    attackDamage: enemy.attackDamage, 
    name: "Super " + enemy.name,
  }

  return newEnemy;
}

const hitEnemy = function(enemy) {
  const newEnemy = {
    name: enemy.name,
    hitPoints: enemy.hitPoints - 10,
    alive: enemy.alive,
    boss: enemy.boss,
    level: enemy.level,
    attackDamage: enemy.attackDamage, 
  }

  if (newEnemy.hitPoints <= 0) {
    newEnemy.alive = false;
  }

  return newEnemy;
}


const beastMode = function(enemy) {
  const newEnemy = {
    name: "Super " + enemy.name,
    hitPoints: enemy.hitPoints,
    alive: enemy.alive,
    boss: true,
    level: enemy.level + 1,
    attackDamage: enemy.attackDamage + 15,
  }

  return newEnemy;
}

const beastModeAlt = function(enemy) {
  const supered = makeSuper(enemy);
  const bossed = makeBoss(supered);
  const leveledUp = levelUp(bossed);
  const newEnemy = buff(leveledUp);

  return newEnemy;
}








// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
