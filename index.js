const express = require("express");
const app = express();
const brcypt = require("bcrypt");
const { route } = require("./Authetication");

app.use(express.json());
app.get("/", (request, response) => {
  response.send("success");
});
app.use("/api", route);
app.listen(5000, () => {
  try {
    console.log("server started " + 5000);
  } catch (error) {
    console.log("Error:", error);
  }
});
