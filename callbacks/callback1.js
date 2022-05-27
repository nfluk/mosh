const getUser = (id, callback) => {
  setTimeout(() => {
    console.log('Reading a user from database ...');
    callback({ id: id, githubUsername: 'nfluk' });
  }, 2000);
};

const getRepositories = (callback) => {
  setTimeout(() => {
    console.log('Calling GitHub API ...');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
};

console.log('Before');
getUser(1, (user) => {
  getRepositories((repos) => {
    console.log('Repos', repos);
  });
});
console.log('After');
