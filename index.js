const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const experiences = require('./routes/experienceRoutes')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')

connectDB()
const app = express()
app.use(express.json())
// app.use(cors)
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({message: 'Portfolio Backend'})
})

app.use('/api/experience', experiences)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server running on port ', PORT)
})