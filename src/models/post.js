const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  catagory: {
    type: String,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  postBody: {
    type: String,
    required: true,
  },

  comments: [
    {
      comment: {
        type: String,
        required: true,
      },
    },
  ],
})
module.exports = mongoose.model('post', postSchema)
