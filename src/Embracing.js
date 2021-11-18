export class Embracing{
    constructor({element = 'div', className = '' } = {}) {
        // criação do elemento img para a nave principal //
        this.referringToClass = document.createElement(element);
        // checar dps a class
        this.referringToClass.className = 'embracing' + className
        document.body.appendChild(this.referringToClass);
      }
      // controle do eixo Y //
      yAxisControl(y) {
        this.yAxis = y;
        this.referringToClass.style.top = `${this.yAxis}px`;
      }
      // controle do eixo X //
      xAxisControl(x) {
        this.xAxis = x;
        this.referringToClass.style.left = `${this.xAxis}px`;
      }

      remove(){
        this.referringToClass.remove();
        this.referringToClass = null;
      }
}