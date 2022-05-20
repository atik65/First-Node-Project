const Contact = require("./Contact");

// create contact
exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;

  const contact = new Contact({
    name,
    phone,
    email,
  });

  contact.save().then((c) => {
    console.log(c);
    res.json(c);
  });
};

//get all contacts
exports.getAllContacts = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => {
      console.log(err.message);

      res.send("Error Occured");
    });
};

// get single contact by id
exports.getSpecificContact = (req, res) => {
  const id = req.params.id;

  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err.message);
      res.send("Error Occured");
    });
};

// update Contact
exports.editContact = (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;

  Contact.findOneAndUpdate(
    { _id: id },
    { $set: { name, email, phone } },
    { new: true }
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err.message);

      res.send("Error Occured");
    });
};

// delete contacts
exports.delteContact = (req, res) => {
  const id = req.params.id;

  Contact.findOneAndDelete({
    _id: id,
  })
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err.message);
      res.send("Error Occured");
    });
};
