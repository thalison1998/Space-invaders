import { Embracing } from "./Embracing.js";
export class HeroShip extends Embracing{
  constructor({removeLife, removeIfItHits, removeShot,}) {
    super({element:'img'})
    
    this.referringToClass.src = "../img/space-invaders.png";
    document.body.appendChild(this.referringToClass);
    this.canShoot = true;
    this.rightLimit = 80;
    this.travelSpeed = 5;
    this.iHaveLife = true;
    this.removeShot = removeShot,
    this.removeLife = removeLife;
    this.removeIfItHits = removeIfItHits;
    this.reappear();
  }

  reappear() {
    this.iHaveLife = true;
    this.referringToClass.style.opacity = 1;
    this.xAxisControl((window.innerWidth - 80) / 2);
    this.yAxisControl(window.innerHeight - 90);
  }

  moveRight() {
    if(!this.iHaveLife ) return;
    this.xAxisControl(this.xAxis + this.travelSpeed);
  }


  moveLeft() {
    if(!this.iHaveLife ) return;
    this.xAxisControl(this.xAxis - this.travelSpeed);
  }

  fire({createShot}) {
    if(this.canShoot && this.iHaveLife){
      this.canShoot = false;
    createShot({
      xAxis: this.xAxis - 7 + this.rightLimit / 2,
      yAxis: this.yAxis
    });
    setTimeout(()=>{
      this.canShoot = true
    },1000)
    }
  }

  checkIfImAlive = () => {
    setTimeout(()=>{
      this.reappear();
    },500);

    this.referringToClass.style.opacity = 0;
  }

  update() {
    const shot = this.removeIfItHits(this);
        if(shot && shot.areAliens && this.iHaveLife) {
          this.removeShot(shot)
          this.removeLife();
          this.checkIfImAlive();
        }
  }
}
