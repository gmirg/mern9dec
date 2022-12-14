const express = require("express");
const router = require("./routes/routes");

require("./database/mongo");

const app = express();

app.use(express.json());
app.use(express.static("build")); 
 
app.use("/", router);

const port = 5000;

app.listen(port, () => console.log(`SERVER ON: ${port}`));