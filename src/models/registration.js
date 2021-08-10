const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

registrationSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    )
    this.tokens = this.tokens.concat({ token: token })
    await this.save()
    return token
  } catch {
    es
  }
  res.send('Error')
}

registrationSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
    console.log('hi')
  }
})

module.exports = mongoose.model('registration', registrationSchema)
