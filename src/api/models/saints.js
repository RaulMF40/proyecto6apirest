const mongoose = require('mongoose')

const saintSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    poder: { type: Number, required: true },
    categoria: {
      type: String,
      required: true,
      enum: [
        'Santos de Oro',
        'Santos de Plata',
        'Santos de Bronce',
        'Santos de Acero',
        'Espectros de Hades',
        'Generales Marinos',
        'Dioses Guerreros de Asgard',
        'Dioses'
      ]
    }
  },
  {
    timestamps: true,
    collection: 'saints'
  }
)

// el modelo la primera en mayuscula y en singular y luego en minusucla
const Saint = mongoose.model('saints', saintSchema, 'saints')

module.exports = Saint
