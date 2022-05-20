const express = require("express");
const mongoose = require("mongoose");
const { getHomepage, pageNotFound } = require("./routeController");
const contactRouters = require("./contactRouters");

const app = express();
const PORT = process.env.PORT || 8080;

const uri = `mongodb+srv://testUser:P1vpGFjXIsktPbpb@cluster0.tx5hg.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/contacts", contactRouters);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", getHomepage);
app.get("*", pageNotFound);

app.listen(PORT, () => {
  console.log("App is running to port ", PORT);
});
