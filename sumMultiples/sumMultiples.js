// get all multiples of 3 and 5 within a range 0 to limit and sum them up --> return the sum

const sum = (limit) => {
  let sum = 0;
  let sumMultipleFive = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0) {
      sumMultipleThree += i;
    } else if (i % 5 === 0) {
      sumMultipleFive += i;
    }
  }

  return sumMultipleThree + sumMultipleFive;
};

console.log(sum(10));
