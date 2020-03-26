const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);



app.listen(3333);

/**
 * Rota / recurso
 * 
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELEte: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmertros nomeados enviados na rota após o simbolo de interrogação, e servem para filtros, paginação.
  * Route Params: pârametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQlite, postgreSQL, Oracle, Microsoft SQL Server
   * nNoSQL: MongoDB, CouchDb, etc 
   */

   /**
    * Driver: Select, insert, update, delete
    * Query Builder: Escrever a querys usando JavaScript: table('users').select('*')
    * 
    */