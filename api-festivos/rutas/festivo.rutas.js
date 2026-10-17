/**
 * @swagger
 * /festivos/{anio}:
 *   get:
 *     summary: Consultar festivos de un año
 *     description: Obtiene los festivos de Colombia para el año indicado.
 *     tags:
 *       - Festivos
 *     parameters:
 *       - in: path
 *         name: anio
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1900
 *           maximum: 9999
 *         description: Año que se desea consultar
 *         example: 2026
 *     responses:
 *       200:
 *         description: Lista de festivos del año consultado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     example: Año nuevo
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     example: 2026-01-01
 *                   tipo:
 *                     type: integer
 *                     example: 1
 *       400:
 *         description: Año inválido
 *       500:
 *         description: Error interno del servidor
 */
/**
 * @swagger
 * /festivos/verificar/{anio}/{mes}/{dia}:
 *   get:
 *     summary: Verificar si una fecha es festiva
 *     description: Consulta si una fecha determinada corresponde a un festivo en Colombia.
 *     tags:
 *       - Festivos
 *     parameters:
 *       - in: path
 *         name: anio
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2026
 *       - in: path
 *         name: mes
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 12
 *         example: 4
 *       - in: path
 *         name: dia
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 31
 *         example: 2
 *     responses:
 *       200:
 *         description: Responde Es Festivo, No es festivo o Fecha No valida
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Es Festivo
 *       500:
 *         description: Error interno del servidor
 */
/**
 * @swagger
 * /festivos/{idTipo}:
 *   post:
 *     summary: Agregar un nuevo festivo
 *     description: Agrega un festivo al tipo indicado en MongoDB.
 *     tags:
 *       - Festivos
 *     parameters:
 *       - in: path
 *         name: idTipo
 *         required: true
 *         description: Identificador del tipo de festivo (1 a 4)
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 4
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Festivo de prueba
 *               dia:
 *                 type: integer
 *                 description: Obligatorio para tipos 1 y 2
 *                 example: 15
 *               mes:
 *                 type: integer
 *                 description: Obligatorio para tipos 1 y 2
 *                 example: 6
 *               diasPascua:
 *                 type: integer
 *                 description: Obligatorio para tipos 3 y 4
 *           examples:
 *             festivoFijo:
 *               summary: Festivo fijo (tipo 1)
 *               value:
 *                 nombre: Festivo de prueba
 *                 dia: 15
 *                 mes: 6
 *             festivoPascua:
 *               summary: Festivo relativo a Pascua (tipo 3)
 *               value:
 *                 nombre: Festivo relativo de prueba
 *                 diasPascua: -3
 *     responses:
 *       201:
 *         description: Festivo agregado correctamente
 *       400:
 *         description: Datos inválidos o festivo duplicado
 *       500:
 *         description: Error interno del servidor
 */
/**
 * @swagger
 * /festivos/{idTipo}/{nombre}:
 *   put:
 *     summary: Actualizar un festivo
 *     description: Modifica los datos de un festivo existente dentro del tipo indicado.
 *     tags:
 *       - Festivos
 *     parameters:
 *       - in: path
 *         name: idTipo
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 4
 *         example: 1
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre actual del festivo que se desea modificar
 *         schema:
 *           type: string
 *         example: Festivo de prueba
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Festivo actualizado
 *               dia:
 *                 type: integer
 *                 description: Obligatorio para tipos 1 y 2
 *                 example: 16
 *               mes:
 *                 type: integer
 *                 description: Obligatorio para tipos 1 y 2
 *                 example: 6
 *               diasPascua:
 *                 type: integer
 *                 description: Obligatorio para tipos 3 y 4
 *     responses:
 *       200:
 *         description: Festivo actualizado correctamente
 *       400:
 *         description: Datos inválidos o festivo no encontrado
 *       500:
 *         description: Error interno del servidor
 */
/**
 * @swagger
 * /festivos/{idTipo}/{nombre}:
 *   delete:
 *     summary: Eliminar un festivo
 *     description: Elimina un festivo del arreglo correspondiente al tipo indicado.
 *     tags:
 *       - Festivos
 *     parameters:
 *       - in: path
 *         name: idTipo
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 4
 *         example: 1
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre del festivo que se desea eliminar
 *         schema:
 *           type: string
 *         example: Festivo de prueba
 *     responses:
 *       200:
 *         description: Festivo eliminado correctamente
 *       400:
 *         description: Tipo o festivo no encontrado
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /festivos/tipos:
 *   get:
 *     summary: Consultar los tipos de festivo
 *     tags:
 *       - Festivos
 *     responses:
 *       200:
 *         description: Lista de tipos de festivo de MongoDB
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Error interno del servidor
 */

module.exports = (app) => {
    const festivoControlador = require('../controladores/festivo.controlador');
    const festivoValidador = require('../validadores/festivo.validador');

    // La ruta fija debe declararse antes de /festivos/:anio.
    app.get('/festivos/tipos', festivoControlador.listarTipos);

    app.get(
        '/festivos/:anio',
        festivoValidador.validarAnio,
        festivoControlador.listarPorAnio
    );

    app.get(
        '/festivos/verificar/:anio/:mes/:dia',
        festivoValidador.validarFecha,
        festivoControlador.verificarFestivo
    );

    app.post(
    '/festivos/:idTipo',
    festivoValidador.validarDatosFestivo,
    festivoControlador.agregarFestivo
    );

    app.put(
        '/festivos/:idTipo/:nombre',
        festivoValidador.validarIdentificadorFestivo,
        festivoValidador.validarDatosFestivo,
        festivoControlador.actualizarFestivo
    );

    app.delete(
        '/festivos/:idTipo/:nombre',
        festivoValidador.validarIdentificadorFestivo,
        festivoControlador.eliminarFestivo
    );
};
