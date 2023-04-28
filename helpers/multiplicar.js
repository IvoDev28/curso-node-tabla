
const fs = require('fs');
const colors = require('colors')

const crearArchivo =  async( base = 5 ,listar=false,hasta=10)=>{
    try {
        let txt = '';
        console.log(colors.green(`Tabla del ${base}`));
        
        for (let i = 1; i <= hasta; i++)
        txt += `${ base } x ${ i } = ${ base * i }\n`;

        if( listar ) console.log(txt);


        fs.writeFileSync(`./salida/tabla-${base}.txt`,txt)
        
        
        return colors.bgRed(`Se creo la tabla del ${base} con exito`)
        
    } catch (err) {
        throw err;
        
    }
  
}


module.exports = {
    crearArchivo
};