const argv = require('yargs')
      .options({
        'b': {
          alias: 'base',
          demandOption: true,
          type: 'number',
          description: 'Es la base de la tabla para multiplicar'
        },
        'l': {
          alias: 'list',
          default: false,
          description: 'Muestra la tabla en consola',
          type: 'boolean'
        },
        'h': {
          alias: 'hasta',
          default: 10,
          description: 'El limite para la tabla de multiplicar',
          type: 'number'
        }

      })
      .check((argv) => {
        if (isNaN(argv.b) ) {
          throw "Esto no es un numero";
        }
        if (isNaN(argv.h) ) {
          throw "Esto no es un numero";
        }
        return true; 
      })
      .argv;

module.exports = argv;
