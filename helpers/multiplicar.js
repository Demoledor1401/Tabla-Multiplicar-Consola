const colors = require('colors');
const fs = require('fs');

const crearArchivo = (base, list, hasta) => { 
  return new Promise((resolve, reject) => {
    if (isNaN(base)) {
      return reject("No es un numero");
    }
    const nombreArchivo = `./build/tabla-${base}.txt`; 
    let salida = '';
    let consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${(base * i)}\n`;  
      consola += `${colors.blue(base)} ${colors.yellow('*')} ${colors.blue(i)} ${colors.yellow("=")} ${colors.green((base * i))}\n`;  
    }
    fs.writeFileSync(nombreArchivo, salida);
    if (!list) {
      return resolve(nombreArchivo);
    }
    console.log("===================================");
    console.log(colors.bold.magenta(`Tabla del multiplicar ${base}`))
    console.log("===================================");
    console.log(consola);
    return resolve(nombreArchivo);
  });
}

module.exports = {
  crearArchivo
};