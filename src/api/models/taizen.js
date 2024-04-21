const mongoose = require('mongoose')

const taizenSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    saints: [{ type: mongoose.Types.ObjectId, ref: 'saints', required: false }]
  },
  {
    timestamps: true,
    collection: 'taizen'
  }
)

const Taizen = mongoose.model('taizen', taizenSchema, 'taizen')
module.exports = Taizen
