let data = [
  {
    id: 1,
    name: "Atik Hasan",
    email: "atikhasan@gmail.com",
    phone: 178549015,
  },
  {
    id: 2,
    name: "Jihad Chowdhuri",
    email: "jihad@gmail.com",
    phone: 54896731,
  },
  {
    id: 3,
    name: "Sabbir Ahmed",
    email: "sabbir@gmail.com",
    phone: 15479631,
  },
];

exports.addContact = (contact) => {
  contact.id = data.length + 1;
  data.push(contact);

  return data;
};

// get all data

exports.getAllContact = () => {
  return data;
};
// get specific contact
exports.getContact = (id) => {
  return data.find((item) => item.id == id);
};

exports.updateContact = (id, contact) => {
  let flag = false;
  data.map((item) => {
    if (parseInt(item.id) == parseInt(id)) {
      item.name = contact.name || item.name;
      item.email = contact.email || item.email;
      item.phone = contact.phone || item.phone;
      flag = true;
    }
  });

  return flag;
};

exports.deleteContact = (id) => {
  let flag = false;
  data = data.filter((item) => {
    if (item.id == parseInt(id)) {
      flag = true;
    }

    return item.id !== parseInt(id);
  });

  return flag;
};

exports.data = data;
