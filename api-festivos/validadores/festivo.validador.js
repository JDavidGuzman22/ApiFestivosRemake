function validarFestivo(idTipo, festivo) {
    const errores = [];

    if (!Number.isInteger(idTipo) || idTipo < 1 || idTipo > 4) {
        errores.push('El tipo de festivo debe estar entre 1 y 4');
    }

    if (!festivo || typeof festivo !== 'object' || Array.isArray(festivo)) {
        return ['Debe proporcionar un objeto con los datos del festivo'];
    }

    if (typeof festivo.nombre !== 'string' || !festivo.nombre.trim()) {
        errores.push('El nombre del festivo es obligatorio');
    }

    if (idTipo === 1 || idTipo === 2) {
        if (!Number.isInteger(festivo.mes) ||
            festivo.mes < 1 || festivo.mes > 12) {
            errores.push('El mes debe estar entre 1 y 12');
        }

        if (!Number.isInteger(festivo.dia) ||
            festivo.dia < 1 || festivo.dia > 31) {
            errores.push('El día debe estar entre 1 y 31');
        }

        if (
            Number.isInteger(festivo.mes) &&
            festivo.mes >= 1 && festivo.mes <= 12 &&
            Number.isInteger(festivo.dia) &&
            festivo.dia >= 1 && festivo.dia <= 31
        ) {
            const fecha = new Date(2024, festivo.mes - 1, festivo.dia);

            if (
                fecha.getMonth() !== festivo.mes - 1 ||
                fecha.getDate() !== festivo.dia
            ) {
                errores.push('El día no corresponde al mes indicado');
            }
        }
    }

    if (idTipo === 3 || idTipo === 4) {
        if (!Number.isInteger(festivo.diasPascua)) {
            errores.push('Los días relativos a Pascua deben ser un número entero');
        }
    }

    return errores;
}

function validarAnio(req, res, next) {
    const anio = Number(req.params.anio);

    if (!Number.isInteger(anio) || anio < 1900 || anio > 9999) {
        return res.status(400).json({
            mensaje: 'El año debe ser un número entero entre 1900 y 9999'
        });
    }

    next();
}

function validarFecha(req, res, next) {
    const anio = Number(req.params.anio);
    const mes = Number(req.params.mes);
    const dia = Number(req.params.dia);

    const fecha = new Date(anio, mes - 1, dia);

    if (
        !Number.isInteger(anio) ||
        !Number.isInteger(mes) ||
        !Number.isInteger(dia) ||
        anio < 1900 || anio > 9999 ||
        mes < 1 || mes > 12 ||
        dia < 1 ||
        fecha.getFullYear() !== anio ||
        fecha.getMonth() !== mes - 1 ||
        fecha.getDate() !== dia
    ) {
        return res.status(200).type('text/plain').send('Fecha No valida');
    }

    next();
}

function validarDatosFestivo(req, res, next) {
    const idTipo = Number(req.params.idTipo);
    const errores = validarFestivo(idTipo, req.body);

    if (errores.length > 0) {
        return res.status(400).json({ errores });
    }

    next();
}

function validarIdentificadorFestivo(req, res, next) {
    const idTipo = Number(req.params.idTipo);
    const nombre = req.params.nombre;

    if (!Number.isInteger(idTipo) || idTipo < 1 || idTipo > 4) {
        return res.status(400).json({
            errores: ['El tipo de festivo debe estar entre 1 y 4']
        });
    }

    if (typeof nombre !== 'string' || !nombre.trim()) {
        return res.status(400).json({
            errores: ['El nombre del festivo es obligatorio']
        });
    }

    next();
}

module.exports = {
    validarFestivo,
    validarAnio,
    validarFecha,
    validarDatosFestivo,
    validarIdentificadorFestivo
};
