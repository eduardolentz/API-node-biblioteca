const { createLogger, format, transports } = require('winston');

// Configuração do formato do log
const logger = createLogger({
  level: 'info', // Define o nível mínimo de log que será registrado
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // Exibe os logs no terminal
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Salva logs de erro
    new transports.File({ filename: 'logs/combined.log' }) // Salva todos os logs
  ]
});

module.exports = logger;
