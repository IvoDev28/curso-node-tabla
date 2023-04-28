const {crearArchivo} = require('./helpers/multiplicar');
const yargs = require('./config/yargs')



console.clear()

crearArchivo(yargs.b, yargs.l, yargs.li)
.then(e=>console.log(e))
.catch(err=>console.log(err))
