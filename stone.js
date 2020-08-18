class Stone{

    constructor(x, y, radius) {

        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.2

        }
        this.body = Bodies.circle(x, y, radius, options);

        this.radius = radius;

        this.image = loadImage("stone.png");

        World.add(world, this.body);

      }
      display(){

        push();

        translate(this.body.position.x, this.body.position.y);

        imageMode(CENTER);

        image(this.image, 0, 0, this.radius);

        pop();
      }
}