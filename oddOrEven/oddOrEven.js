const oddOrEven = (limit) => {
  let i = 0;
  while (i <= limit) {
    if (i % 2 === 0) {
      console.log(i, 'EVEN');
      i++;
    } else {
      console.log(i, 'ODD');
      i++;
    }
  }
};

oddOrEven(10);
