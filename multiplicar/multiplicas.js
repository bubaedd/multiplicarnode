const fs = require('fs');
const colors = require('colors');
let data = '';

module.exports.creararchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`digite un numero || base ${base} no es un  numero`);
            return;
        }


        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}-al-${limite}.txt`.rainbow);
            }

        });
    });
}

module.exports.listartabla = (base, limite) => {

    if (!Number(base) || !Number(limite)) {
        console.log(`la base:${base} o el limite:${limite} no son numeros`);
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }




}