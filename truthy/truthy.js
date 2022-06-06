// function that counts truthy values in an array

const countTruthy = (array) => {
  let count = 0;
  array.forEach((element) => {
    if (element) {
      count++;
    }
  });
  console.log(count);
};

countTruthy([0, undefined, '', 2, 3]);
