const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.b, argv.l, argv.h)
  .then( resp => console.log(resp))
  .catch( err => console.log(err))
