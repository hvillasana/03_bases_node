const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo} = require('./multiplicar/multiplicar'); 
const { listarTabla } = require('./multiplicar/multiplicar'); 

//console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then( archivo => console.log(`Archivo creado`.red))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// let base = 'aa';

