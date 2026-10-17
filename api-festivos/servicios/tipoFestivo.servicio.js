const festivoRepositorio = require('../repositorios/festivo.repositorio');

async function listarTipos() {
    return await festivoRepositorio.listarTipos();
}

async function buscarTipoPorId(idTipo) {
    return await festivoRepositorio.buscarTipoPorId(idTipo);
}

module.exports = {
    listarTipos,
    buscarTipoPorId
};