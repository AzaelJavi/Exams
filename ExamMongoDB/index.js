const express = require("express");
const app = express();

require("./db")();
require("./routes")(app);

const port = process.env.PORT || 3700;
app.listen(port, () => console.log(`Listening on port ${port}...`));
