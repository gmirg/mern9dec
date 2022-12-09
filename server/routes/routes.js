const router = require("express").Router();
const film = require("../controllers/Videoteca");

//TAREA Mongoose
router.post("/", film.insertFilm);  

module.exports = router;