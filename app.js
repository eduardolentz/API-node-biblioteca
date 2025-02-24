const express = require('express');
const app = express();
const sequelize = require('./config/database');
const livrosRoutes = require('./routes/livros');
const seed = require('./seed');
const logger = require('./utils/logger'); // Importando o logger
require('dotenv').config();

app.use(express.json());
app.use('/api/livros', livrosRoutes);

// Middleware para capturar erros e logá-los
app.use((err, req, res, next) => {
  logger.error(`Erro: ${err.message}`);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

// Inicializa o servidor
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8000;

  sequelize
    .authenticate()
    .then(() => {
      logger.info('Conectado ao banco de dados.');
      return sequelize.sync();
    })
    .then(() => {
      logger.info('Tabelas sincronizadas.');
      return seed();
    })
    .then(() => {
      app.listen(PORT, () => {
        logger.info(`Servidor rodando na porta ${PORT}`);
      });
    })
    .catch((err) => {
      logger.error(`Erro ao iniciar o servidor: ${err.message}`);
    });
}

module.exports = app;
