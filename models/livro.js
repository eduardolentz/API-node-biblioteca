const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'livros',
  timestamps: false
});

module.exports = Livro;
