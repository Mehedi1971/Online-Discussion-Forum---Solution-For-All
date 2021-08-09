const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
})

registrationSchema.pre('save', async function (next) {
  // this.password = await bcrypt.hash(this.password, 10)
  // next()
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
    console.log('hi')
  }
})

module.exports = mongoose.model('registration', registrationSchema)
// if (this.isModified('password')) {
//   this.password = await bcrypt.hash(this.password, 10)
// }
