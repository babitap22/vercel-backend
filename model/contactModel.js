const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
name: {
  type: String,
  require: true,
  trim: true
},
email: {
  type: String,
  require:true,
  lowercase:true,
  trim: true,

},

 subject: {
  type: String,
  require: true,
  trim: true
  },

 message: {
  type: String,
  require: true,
  trim: true
  },

  },
  {timestamps: true}
)

module.exports = mongoose.model("Contact", contactSchema)