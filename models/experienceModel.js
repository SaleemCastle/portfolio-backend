const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema({
  employer: String,
  title: String,
  period: String,
  description: String,
  highlights: [String]
})

module.exports = mongoose.model('Experience', experienceSchema)

// Employer
// title
// period
// description
// highlights []