var m4g1c = require('./index')

// Programmatical
m4g1c('Awesome package refactored, demo added, new keywords added', false)
  .then((value) => {console.log(value)})
  .catch((err) => {console.log(err);})
