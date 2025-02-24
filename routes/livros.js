const express = require('express');
const router = express.Router();
const Livro = require('../models/livro');
const logger = require('../utils/logger'); // Importando o logger

// GET todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.findAll();
    logger.info('Lista de livros retornada com sucesso.');
    res.json(livros);
  } catch (err) {
    logger.error(`Erro ao buscar livros: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

// GET um livro por ID
router.get('/:id', async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) {
      logger.warn(`Livro ID ${req.params.id} não encontrado.`);
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    logger.info(`Livro ID ${req.params.id} retornado com sucesso.`);
    res.json(livro);
  } catch (err) {
    logger.error(`Erro ao buscar livro ID ${req.params.id}: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

// POST criar novo livro
router.post('/', async (req, res) => {
  try {
    const { titulo, autor, ano_publicacao } = req.body;
    const novoLivro = await Livro.create({ titulo, autor, ano_publicacao });
    logger.info(`Livro "${titulo}" criado com sucesso.`);
    res.status(201).json(novoLivro);
  } catch (err) {
    logger.error(`Erro ao criar livro: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

// DELETE remover um livro
router.delete('/:id', async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) {
      logger.warn(`Tentativa de deletar livro ID ${req.params.id} que não existe.`);
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    await livro.destroy();
    logger.info(`Livro ID ${req.params.id} removido com sucesso.`);
    res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    logger.error(`Erro ao deletar livro ID ${req.params.id}: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
