const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const experiences = require('./routes/experienceRoutes')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')
const cron = require('node-cron');

const { constants: { SERVER_URL } } = require('./constants')
const axios = require('axios')


connectDB()
const app = express()
app.use(express.json())

const corsOption = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:80', 'https://www.saleemcastle.com', 'https://saleemcastle.com']
}
app.use(cors(corsOption))
const PORT = process.env.PORT || 5000

// attempt to resolve cors issue
app.options('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});

app.get('/', (req, res) => {
  res.json({message: 'Portfolio Backend'})
})

app.use('/api/experience', experiences)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server running on port ', PORT)
})

cron.schedule('*/10 * * * *', () => {
  console.log('axios request to render url to keep alive')
  axios.get(SERVER_URL)
  .then(function (response) {
    // handle success
    console.log(response.status);
  })

})