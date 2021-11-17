export class HeroShip {
  constructor() {
    // criação do elemento img para a nave principal //
    this.ship = document.createElement("img");
    this.ship.classList.add("ship");
    this.ship.src = "../img/space-invaders.png";
    document.body.appendChild(this.ship);
    
    this.rightLimit = 83;
    this.travelSpeed = 5; // velocidade de deslocação

    // padrões iniciar setados //
    this.xAxisControl((window.innerWidth - 80) / 2);
    this.yAxisControl(window.innerHeight - 90);
  }
  // controle do eixo Y //
  yAxisControl(y) {
    this.yAxis = y;
    this.ship.style.top = `${this.yAxis}px`;
  }
  // controle do eixo X //
  xAxisControl(x) {
    this.xAxis = x;
    this.ship.style.left = `${this.xAxis}px`;
  }

  // movimentação do eixo X para a direita //
  moveRight() {
    this.xAxisControl(this.xAxis + this.travelSpeed);
  }

  // movimentação do eixo Y para a esquerda //
  moveLeft() {
    this.xAxisControl(this.xAxis - this.travelSpeed);
  }
}
