import { HeroShip }  from "./HeroShip.js";

const keys = {
    a:false,
    d:false,
    [' ']:false,
}

// funções de tratamento das teclas //

const pressedKeys = (e) => keys[e.key] = true
 
const looseKeys = (e) => keys[e.key] = false

document.addEventListener('keydown',pressedKeys);
document.addEventListener('keyup', looseKeys);

const ship = new HeroShip();

const updateTheMove = () => {
    if(keys['d'] && (ship.xAxis < window.innerWidth - ship.rightLimit)) {
        ship.moveRight();
    }

    else if(keys['a'] && ship.xAxis > 3) ship.moveLeft();
}

setInterval(updateTheMove, 20);