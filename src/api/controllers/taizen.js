const Taizen = require('../models/taizen')

const getTaizen = async (req, res, next) => {
  try {
    const taizen = await Taizen.find().populate('saints')
    return res.status(200).json(taizen)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getTaizenById = async (req, res, next) => {
  try {
    const { id } = req.params
    const taizen = await Taizen.findById(id).populate('saints')
    return res.status(200).json(taizen)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postTaizen = async (req, res, next) => {
  try {
    const newTaizen = new Taizen(req.body)
    const taizenSaved = await newTaizen.save()
    return res.status(201).json(taizenSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putTaizen = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldTaizen = await Taizen.findById(id)
    const newTaizen = new Taizen(req.body)
    newTaizen._id = id
    newTaizen.saints = [...oldTaizen.saints, ...req.body.saints]
    const taizenUpdated = await Taizen.findByIdAndUpdate(id, newTaizen, {
      new: true
    })
    return res.status(200).json(taizenUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteTaizen = async (req, res, next) => {
  try {
    const { id } = req.params
    const taizenDeleted = await Taizen.findByIdAndDelete(id)
    return res.status(200).json(taizenDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getTaizen,
  getTaizenById,
  postTaizen,
  putTaizen,
  deleteTaizen
}
