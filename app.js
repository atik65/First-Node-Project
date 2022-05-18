const express = require("express");
const { getHomepage, pageNotFound } = require("./routeController");
const contactRouters = require("./contactRouters");

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/contacts", contactRouters);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", getHomepage);

app.get("*", pageNotFound);
app.listen(PORT, () => {
  console.log("App is running to port ", PORT);
});
