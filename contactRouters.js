const express = require("express");
const {
  getAllContacts,
  getSpecificContact,
  delteContact,
  createContact,
  editContact,
} = require("./contactsRouteController");

const Router = require("express").Router();

Router.post("/", express.json(), createContact);
Router.get("/", getAllContacts);
Router.get("/:id", getSpecificContact);
Router.delete("/:id", delteContact);
Router.put("/:id", express.json(), editContact);

module.exports = Router;
