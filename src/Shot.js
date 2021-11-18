import { Embracing } from "./Embracing.js";

export class Shot extends Embracing{
    constructor({xAxis, yAxis, areAliens}) {
        super({element:'img'});
        this.referringToClass.src = "../img/shot.png";
        this.travelSpeed = 5;
        this.areAliens = areAliens;
        this.xAxisControl(xAxis);
        this.yAxisControl(yAxis);
      }
      
      updateTheMove() {
        const directionY = (this.areAliens? this.travelSpeed:-this.travelSpeed)
        this.yAxisControl(this.yAxis + directionY);
      }
}