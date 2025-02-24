const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database'); // Importa a instância do Sequelize

describe('GET /api/livros', () => {
  it('deve retornar uma lista de livros', async () => {
    const response = await request(app).get('/api/livros');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

// Fecha a conexão com o banco após os testes
afterAll(async () => {
  await sequelize.close();
});
