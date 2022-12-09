const router = require("express").Router();
const film = require("../controllers/Videoteca");

router.post("/", film.insertFilm);  

module.exports = router;