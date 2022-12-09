const peliculaModel = require("../models/pelicula");

const Videoteca = {
  insertFilm: async (req, res) => {
    const { titulo, genero, director } = req.body;
    let info = { titulo, genero, director };
    const insertFilms = await peliculaModel.create(info);
    res.json(insertFilms);
  },
};

module.exports = Videoteca;