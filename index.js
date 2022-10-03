const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked! or did it?");
});

app.listen(3000);
