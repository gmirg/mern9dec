const peliculaModel = require("../models/pelicula");

const Videoteca = {
  insertFilm: async (req, res) => {
    const { titulo, genero, director } = req.body;
    let info = { titulo, genero, director };
    console.log(info)
    const insertFilms = await peliculaModel.save(info);
    res.json(insertFilms);
  },
};

module.exports = Videoteca;