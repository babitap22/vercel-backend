const Contact = require("../model/contactModel");

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newContact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, data: newContact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Export both functions together
module.exports = { createContact, getContacts };
