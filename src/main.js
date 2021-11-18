import { Aliens } from "./Aliens.js";
import { HeroShip } from "./HeroShip.js";
import { Shot } from "./Shot.js";
import { Score } from "./Score.js";
import { Lives } from "./Lives.js";

const scoreNw = new Score();
const livesNw = new Lives();

const aliensRows = 5;
const aliensCols = 9;

const keys = {
  a: false,
  d: false,
  [" "]: false,
};


const shots = [];


const removeAliens = (alien) => {
    aliens.splice(aliens.indexOf(alien), 1);
    alien.remove();

    for(let row = 0; row < gridForTheAliens.length; row++){
      for(let col = 0; col < gridForTheAliens.length; col++){
        if(gridForTheAliens[row][col] === alien){
          gridForTheAliens[row][col] = null;
        }
      }
    }
}
const removeShot = (shot) => {
    shots.splice(shots.indexOf(shot), 1);
    shot.remove();
}
const pressedKeys = (e) => (keys[e.key] = true);

const looseKeys = (e) => (keys[e.key] = false);

document.addEventListener("keydown", pressedKeys);
document.addEventListener("keyup", looseKeys);

const isClosed = (element1, element2) => {
  const rect1 = element1.referringToClass.getBoundingClientRect();
  const rect2 = element2.referringToClass.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
};


const removeIfItHits = (embracing) => {
  for (let shot of shots) {
    if (isClosed(embracing, shot)) {
      return shot;
    }
  }
  return null;
};

const ship = new HeroShip({
  removeLife:()=> livesNw.removeLife(),
  removeShot,
  removeIfItHits,
});

const aliens = [];
const gridForTheAliens = [];

for (let row = 0; row < aliensRows; row++) {
  const colForTheAliens = [];

  for (let col = 0; col < aliensCols; col++) {
    const alien = new Aliens({
      xAxis: col * 60 + 120,
      yAxis: row * 60 + 0,
      removeIfItHits,
      removeAliens,
      removeShot,
      toScore:(amount)=> scoreNw.toScore(amount)
    });
    aliens.push(alien);
    colForTheAliens.push(alien)
  }
    gridForTheAliens.push(colForTheAliens)
}

const getAliens = () => {
  const bottom = []
  for(let col = 0; col < aliensCols; col ++){
    for(let row = aliensRows - 1; row >= 0; row--){
      if(gridForTheAliens[row][col])
      bottom.push(gridForTheAliens[row][col]);
      break;
    }
  }
  return bottom;
}

const randomAlien = (list) => {
  return list[parseInt(Math.random() * list.length)]
}

const shotAliens = () => {
  const btAliens = getAliens();
  const randomAliens = randomAlien(btAliens);
  console.log(btAliens)
  createShot({
    xAxis: randomAliens.xAxis + 30,
    yAxis:randomAliens.yAxis + 33,
    areAliens:true,
  })
}

setInterval(shotAliens, 1000);

const positionTheLeftMostAlien = () => {
  return aliens.reduce((min, alien) => {
    return alien.xAxis < min.xAxis ? alien : min;
  });
};
const positionTheRightMostAlien = () => {
  return aliens.reduce((max, alien) => {
    return alien.xAxis > max.xAxis ? alien : max;
  });
};



const createShot = ({ xAxis, yAxis, areAliens }) => {
  shots.push(
    new Shot({
      xAxis,
      yAxis,
      areAliens,
    })
  );
};

const updateTheMove = () => {
  if (keys["d"] && ship.xAxis < window.innerWidth - ship.rightLimit) {
    ship.moveRight();
  } else if (keys["a"] && ship.xAxis > 3) ship.moveLeft();

  if (keys[" "]) {
    ship.fire({
      createShot,
    });
  }

  ship.update()

  shots.forEach((shot) => {
    shot.updateTheMove();
    if (shot.yAxis < 0) {
      shot.remove();
      shots.splice(shots.indexOf(shot), 1);
    }
  });

  aliens.forEach((alien) => {
    alien.updateTheMove();
  });

  const leftAlien = positionTheLeftMostAlien();

  if (leftAlien.xAxis < 30) {
    /*   console.log('left') */
    aliens.forEach((alien) => {
      alien.moveDirectionRight();
      alien.moveDown();
    });
  }

  const rightAlien = positionTheRightMostAlien();
  if (rightAlien.xAxis > window.innerWidth - 60) {
    aliens.forEach((alien) => {
      alien.moveDirectionLeft();
      alien.moveDown();
    });
  }
};

setInterval(updateTheMove, 20);
