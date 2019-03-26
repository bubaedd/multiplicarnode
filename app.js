const argv = require('./config/yargs').argv;
const colors = require('colors');


const { creararchivo, listartabla } = require('./multiplicar/multiplicas');




//let base = '5';

//console.log(process.argv);


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado : ${archivo} `)).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('comando no reconocido');
}



//let parametro = argv[2];

//let base = parametro.split('=')[1];