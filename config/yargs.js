const opts = {
    base:{
        demand:true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default:10
    }
};
const argv = require('yargs')
        .command('listar','* Imprime en consola la tabla de multiplicar de la base',opts)
        .command('crear','* Crea archivo txt de tabla de multiplicar de la base',opts)
        .argv;


module.exports = {
    argv
}