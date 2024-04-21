const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Elevando el cosmos al 9º sentido con la BBDD 🔥🔥')
  } catch (error) {
    console.log('algo ha salido mal')
  }
}

module.exports = { connectDB }
