const Livro = require('./models/livro');

async function seed() {
  try {
    const count = await Livro.count();
    if (count === 0) {
      await Livro.bulkCreate([
        { titulo: "A Cor Púrpura", autor: "Alice Walker", ano_publicacao: 1982 },
        { titulo: "Cem anos de Solidão", autor: "Gabriel García Márquez", ano_publicacao: 1967 },
        { titulo: "Moby Dick", autor: "Herman Melville", ano_publicacao: 1851 },
        { titulo: "Ainda Estou Aqui", autor: "Marcelo Rubens Paiva", ano_publicacao: 2015 },
        { titulo: "Todo o Amor", autor: "Vinícius de Moraes", ano_publicacao: 1982 }
      ]);
      console.log("Dados iniciais inseridos.");
    }
  } catch (error) {
    console.error("Erro no seed:", error);
  }
}

module.exports = seed;
