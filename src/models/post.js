const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  catagory: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('post', postSchema)
