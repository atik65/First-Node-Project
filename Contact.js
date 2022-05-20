const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
});

const Contact = new model("Contact", contactSchema);

module.exports = Contact;
