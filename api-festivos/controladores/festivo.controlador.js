const festivoServicio = require('../servicios/festivo.servicio');
const tipoFestivoServicio = require('../servicios/tipoFestivo.servicio');

exports.listarPorAnio = async (req, res) => {
    try {
        const anio = Number(req.params.anio);

        if (!Number.isInteger(anio) || anio < 1900 || anio > 9999) {
            return res.status(400).json({
                mensaje: 'El año debe ser un número entero entre 1900 y 9999'
            });
        }

        const festivos = await festivoServicio.listarFestivosPorAnio(anio);

        return res.status(200).json(festivos);
    } catch (error) {
        console.error('Error consultando festivos:', error);

        return res.status(500).json({
            mensaje: 'Error obteniendo los festivos del año'
        });
    }
};


exports.verificarFestivo = async (req, res) => {
    try {
        const anio = Number(req.params.anio);
        const mes = Number(req.params.mes);
        const dia = Number(req.params.dia);

        const resultado = await festivoServicio.verificarFestivo(
            anio,
            mes,
            dia
        );

        if (resultado.esFestivo) {
            return res.status(200).type('text/plain').send('Es Festivo');
        }

        return res.status(200).type('text/plain').send('No es festivo');

    } catch (error) {
        console.error('Error verificando festivo:', error);

        return res.status(500).json({
            mensaje: 'Error verificando la fecha'
        });
    }
};


exports.agregarFestivo = async (req, res) => {
    try {
        const idTipo = Number(req.params.idTipo);

        const resultado = await festivoServicio.agregarFestivo(
            idTipo,
            req.body
        );

        if (resultado.errores) {
            return res.status(400).json({
                errores: resultado.errores
            });
        }

        return res.status(201).json({
            mensaje: 'Festivo agregado correctamente',
            festivo: resultado.festivo
        });
    } catch (error) {
        console.error('Error agregando festivo:', error);

        return res.status(500).json({
            mensaje: 'Error agregando el festivo'
        });
    }
};

exports.actualizarFestivo = async (req, res) => {
    try {
        const idTipo = Number(req.params.idTipo);
        const nombreActual = req.params.nombre;

        const resultado = await festivoServicio.actualizarFestivo(
            idTipo,
            nombreActual,
            req.body
        );

        if (resultado.errores) {
            return res.status(400).json({
                errores: resultado.errores
            });
        }

        return res.status(200).json({
            mensaje: 'Festivo actualizado correctamente',
            festivo: resultado.festivo
        });
    } catch (error) {
        console.error('Error actualizando festivo:', error);

        return res.status(500).json({
            mensaje: 'Error actualizando el festivo'
        });
    }
};


exports.eliminarFestivo = async (req, res) => {
    try {
        const idTipo = Number(req.params.idTipo);
        const nombre = req.params.nombre;

        const resultado = await festivoServicio.eliminarFestivo(
            idTipo,
            nombre
        );

        if (resultado.errores) {
            return res.status(400).json({
                errores: resultado.errores
            });
        }

        return res.status(200).json({
            mensaje: 'Festivo eliminado correctamente'
        });
    } catch (error) {
        console.error('Error eliminando festivo:', error);

        return res.status(500).json({
            mensaje: 'Error eliminando el festivo'
        });
    }
};




exports.listarTipos = async (req, res) => {
    try {
        const tipos = await tipoFestivoServicio.listarTipos();
        return res.status(200).json(tipos);
    } catch (error) {
        console.error('Error consultando tipos de festivo:', error);
        return res.status(500).json({ mensaje: 'Error obteniendo los tipos de festivo' });
    }
};
