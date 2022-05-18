let {
  data,
  addContact,
  getContact,
  updateContact,
  deleteContact,
  getAllContact,
} = require("./data");

//get all contacts
exports.getAllContacts = (req, res) => {
  res.send(getAllContact());
};

// get single contact by id
exports.getSpecificContact = (req, res) => {
  const contactId = req.params.id;

  const filteredContact = getContact(contactId);

  if (!!filteredContact) {
    res.send(filteredContact);
  } else {
    res.send("Not matched any Contact!!");
  }
};

// delete contacts
exports.delteContact = (req, res) => {
  const id = req.params.id;

  const done = deleteContact(id);

  if (!!done) {
    res.send("Contact Deleted");
  } else {
    res.send("No Contact Exist with this ID");
  }
};

exports.createContact = (req, res) => {
  const newData = addContact(req.body);

  res.json(newData);
};

exports.editContact = (req, res) => {
  const done = updateContact(req.params.id, req.body);

  if (!!done) {
    res.send("Contact Updated");
  } else {
    res.send("No Contact Exist with this ID");
  }
};
