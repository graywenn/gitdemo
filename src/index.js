const express = require("express");
const app = express();
const port = 3333;
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(3333, console.log(`App listening on port ${port}`));
