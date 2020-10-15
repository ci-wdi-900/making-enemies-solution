const {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
} = require('./main.js')


describe('makeBoss', () => {
  it(`given an object, returns a new object with the boss property set to true`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const expectedEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: true,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const expectedEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: true,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    expect(makeBoss(enemy1)).toEqual(expectedEnemy1);
    expect(makeBoss(enemy2)).toEqual(expectedEnemy2);
  });

  it('does not mutate the object passed in', () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const copyOfEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const copyOfEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    makeBoss(enemy1);
    makeBoss(enemy2);
    
    expect(enemy1).toEqual(copyOfEnemy1);
    expect(enemy2).toEqual(copyOfEnemy2);
  })
});

describe('levelUp', () => {
  it(`given an object, returns a new object with the level property incremented by 1`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const expectedEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const expectedEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 3,
      alive: true,
      hitPoints: 50,
    }

    expect(levelUp(enemy1)).toEqual(expectedEnemy1);
    expect(levelUp(enemy2)).toEqual(expectedEnemy2);
  });

  it('does not mutate the object passed in', () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const copyOfEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const copyOfEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    levelUp(enemy1);
    levelUp(enemy2);
    
    expect(enemy1).toEqual(copyOfEnemy1);
    expect(enemy2).toEqual(copyOfEnemy2);
  })
});

describe('buff', () => {
  it(`given an object, returns a new object with the attackDamage increased by 15`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 100,
    }

    const expectedEnemy1 = {
      name: 'Goomba',
      attackDamage: 20,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 3,
      alive: true,
      hitPoints: 50,
    }

    const expectedEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 25,
      boss: false,
      level: 3,
      alive: true,
      hitPoints: 50,
    }

    expect(buff(enemy1)).toEqual(expectedEnemy1);
    expect(buff(enemy2)).toEqual(expectedEnemy2);
  });

  it('does not mutate the object passed in', () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const copyOfEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const copyOfEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    buff(enemy1);
    buff(enemy2);
    
    expect(enemy1).toEqual(copyOfEnemy1);
    expect(enemy2).toEqual(copyOfEnemy2);
  })
});

describe('makeSuper', () => {
  it(`given an object, returns a new object with "Super " prepended (put before) its name`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 100,
    }

    const expectedEnemy1 = {
      name: 'Super Goomba',
      attackDamage: 5,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 3,
      alive: true,
      hitPoints: 50,
    }

    const expectedEnemy2 = {
      name: 'Super Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 3,
      alive: true,
      hitPoints: 50,
    }

    expect(makeSuper(enemy1)).toEqual(expectedEnemy1);
    expect(makeSuper(enemy2)).toEqual(expectedEnemy2);
  });

  it('does not mutate the object passed in', () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const copyOfEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const copyOfEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    makeSuper(enemy1);
    makeSuper(enemy2);
    
    expect(enemy1).toEqual(copyOfEnemy1);
    expect(enemy2).toEqual(copyOfEnemy2);
  })
});

describe('hitEnemy', () => {
  it(`given an object, returns a new object with the hit points reduced by 10`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const expectedEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 90,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const expectedEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 40,
    }

    expect(hitEnemy(enemy1)).toEqual(expectedEnemy1);
    expect(hitEnemy(enemy2)).toEqual(expectedEnemy2);
  });

  it(`sets alive to false if hit points are at or below 0`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 10,
    }

    const expectedEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: false,
      hitPoints: 0,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 5,
    }

    const expectedEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: false,
      hitPoints: -5,
    }

    expect(hitEnemy(enemy1)).toEqual(expectedEnemy1);
    expect(hitEnemy(enemy2)).toEqual(expectedEnemy2);
  })

  it('does not mutate the object passed in', () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const copyOfEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const copyOfEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    hitEnemy(enemy1);
    hitEnemy(enemy2);
    
    expect(enemy1).toEqual(copyOfEnemy1);
    expect(enemy2).toEqual(copyOfEnemy2);
  })
})

describe('beastMode', () => {
  it(`given an object, returns a new object that's been buffed (attackDamage increased by 15), made into a boss (boss set to true), had "Super " prepended to its name, and leveled up (level incremented by 1)`, () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const expectedEnemy1 = {
      name: 'Super Goomba',
      attackDamage: 20,
      boss: true,
      level: 2,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const expectedEnemy2 = {
      name: 'Super Koopa Troopa',
      attackDamage: 25,
      boss: true,
      level: 3,
      alive: true,
      hitPoints: 50,
    }

    expect(beastMode(enemy1)).toEqual(expectedEnemy1);
    expect(beastMode(enemy2)).toEqual(expectedEnemy2);
  });

  it('does not mutate the object passed in', () => {
    const enemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const copyOfEnemy1 = {
      name: 'Goomba',
      attackDamage: 5,
      boss: false,
      level: 1,
      alive: true,
      hitPoints: 100,
    }

    const enemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    const copyOfEnemy2 = {
      name: 'Koopa Troopa',
      attackDamage: 10,
      boss: false,
      level: 2,
      alive: true,
      hitPoints: 50,
    }

    beastMode(enemy1);
    beastMode(enemy2);
    
    expect(enemy1).toEqual(copyOfEnemy1);
    expect(enemy2).toEqual(copyOfEnemy2);
  })
})
