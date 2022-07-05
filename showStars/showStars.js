const showStars = (num) => {
  for(let level = 0; level <= num; level++) {
    let stars = '';
    for (let i = 0; i < level; i++) {
      stars += '*';
    };
    console.log(stars);
  };
};

showStars(5);