// creating a factory function

function createBall(radius) {
  return {
    radius, // same as "radius: radius" - if key & value are the same name no need to add value
    draw() {
      console.log(`drawing of ball with radius ${radius}`);
    },
  };
}

const ball1 = createBall(1);
console.log(ball1);

const ball2 = createBall(3);
console.log(ball2);
