const Saint = require('../models/saints')

const getSaints = async (req, res, next) => {
  try {
    const saints = await Saint.find()
    return res.status(200).json(saints)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getSaintById = async (req, res, next) => {
  try {
    const { id } = req.params
    const saint = await Saint.findById(id)
    return res.status(200).json(saint)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getSaintByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params
    const saints = await Saint.find({ categoria })
    return res.status(200).json(saints)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getSaintByPower = async (req, res, next) => {
  try {
    const { poder } = req.params
    const saints = await Saint.find({ poder: { $eq: poder } })
    return res.status(200).json(saints)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postSaint = async (req, res, next) => {
  try {
    /*console.log(req.body)*/
    const newSaint = new Saint(req.body)
    const saintSaved = await newSaint.save()
    return res.status(201).json(saintSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud') // si lo pongo sin comillas actua como console log para ver lo que le falta
  }
}

const putSaint = async (req, res, next) => {
  try {
    const { id } = req.params
    const newSaint = new Saint(req.body)
    newSaint._id = id
    const saintUpdated = await Saint.findByIdAndUpdate(id, newSaint, {
      new: true
    })
    return res.status(200).json(saintUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteSaint = async (req, res, next) => {
  try {
    const { id } = req.params
    const saintDeleted = await Saint.findByIdAndDelete(id)
    return res.status(200).json(saintDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getSaints,
  getSaintById,
  getSaintByCategory,
  getSaintByPower,
  postSaint,
  putSaint,
  deleteSaint
}
