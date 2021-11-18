import { Embracing } from "./Embracing.js";

const directionLeft = 'left'
const directionRight = 'right'
export class Aliens extends Embracing{
    constructor({
      xAxis, 
      yAxis, 
      removeIfItHits, 
      removeAliens, 
      removeShot,
      toScore,
    }){
        
        super({element:'img'});
        this.referringToClass.src = '../img/aliens1.png'
        this.removeIfItHits = removeIfItHits;
        this.removeAliens = removeAliens;
        this.removeShot = removeShot;
        this.travelSpeed = 2;
        this.traveSpeedDown = 15;
        this.toScore = toScore;
        this.points = 20;
        this.direction = directionLeft;
        this.xAxisControl(xAxis);
        this.yAxisControl(yAxis);
      }
      
      moveDirectionRight() {
        this.direction = directionRight;
      }
      moveDirectionLeft() {
        this.direction = directionLeft;
      }

      moveDown() {
        this.yAxisControl(this.yAxis + this.traveSpeedDown);
        
      }

      updateTheMove() {
        if(this.direction === directionLeft){
        this.xAxisControl(this.xAxis - this.travelSpeed)
        
        }
        else{
          this.xAxisControl(this.xAxis + this.travelSpeed)
          
        }

        const shot = this.removeIfItHits(this);
        if(shot && !shot.areAliens) {
          this.removeAliens(this);
          this.removeShot(shot);
          this.toScore(this.points);
        }
    }
}