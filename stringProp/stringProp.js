// show all string properties of an object

const movie = {
  title: 'Jaws',
  releaseYear: 1975,
  rating: 8.1,
  director: 'Steven Spielberg',
};

const showProperties = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key]);
    }
  }
};

showProperties(movie);
