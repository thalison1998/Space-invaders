import { Embracing } from "./Embracing.js";

export class Lives extends Embracing{ 
    constructor(){
        super();
        this.numberOflives = 3
        this.xAxisControl(window.innerWidth / 2);
        this.yAxisControl(window.innerHeight -22)
        this.updateText();

    }

    
   removeLife () {
    this.numberOflives--;
    this.updateText();
  };

  updateText () {
    this.referringToClass.innerText = new Array(this.numberOflives)
    .fill(`♡`)
    .join(' ')

  }

}