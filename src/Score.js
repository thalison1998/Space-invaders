import { Embracing } from "./Embracing.js";

export class Score extends Embracing{ 
    constructor(){
        super();
        this.score = 0;
        this.xAxisControl(window.innerWidth / 2);
        this.yAxisControl(20)
        this.updateText();

    }

    
   toScore (amount) {
    this.score += amount;
    this.updateText();
  };

  updateText () {
    this.referringToClass.innerText = `Score: ${this.score}`

  }

}