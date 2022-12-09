const mongoose = require("mongoose");

const peliculas = {
  titulo: String,
  genero: String,
  director: String
};

const peliculaSchema = mongoose.Schema(peliculas, {
  versionKey: false,
});


const Peliculas = mongoose.model("peliculas", peliculaSchema);

module.exports = Peliculas;
