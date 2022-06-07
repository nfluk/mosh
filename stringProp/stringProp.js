// show all string properties of an object

const movie1 = {
  title: 'Jaws',
  releaseYear: 1975,
  rating: 8.1,
  director: 'Steven Spielberg',
};

const movie2 = {
  title: 'Kickboxer',
  releaseYear: 1989,
  rating: 6.4,
  director: 'Mark DiSalle & David Worth',
};

const showProperties = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key]);
    }
  }
};

showProperties(movie1);
showProperties(movie2);
