const mongoose = require("mongoose");

const peliculasPlantilla = {
  titulo: String,
  genero: String,
  director: String
};

const peliculaSchema = mongoose.Schema(peliculasPlantilla, {
  versionKey: false,
});


const Peliculas = mongoose.model("Peliculas", peliculaSchema);

module.exports = Peliculas;
