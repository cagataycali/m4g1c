var m4g1c = require('./index')

// Programmatical
m4g1c('init', false)
  .then((value) => {console.log(value)})
  .catch((err) => {console.log(err);})
