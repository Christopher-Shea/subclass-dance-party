var makeCatDancer = class CatDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="dancer kitty" src="src/nicekitty.png">');
    this.angle = 0;
    this.setPosition(this.position);
  }

  step() {
    makeDancer.prototype.step.call(this);
    this.angle += 25;
    this.$node.css("transform", `rotate(${this.angle}deg)`);
    };

};