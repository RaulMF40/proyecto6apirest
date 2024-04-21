const {
  getSaints,
  getSaintById,
  getSaintByCategory,
  getSaintByPower,
  putSaint,
  postSaint,
  deleteSaint
} = require('../controllers/saints')

const saintsRouter = require('express').Router()

saintsRouter.get('/poder/:poder', getSaintByPower)
saintsRouter.get('/categoria/:categoria', getSaintByCategory)
saintsRouter.get('/:id', getSaintById)
saintsRouter.get('/', getSaints)
saintsRouter.post('/', postSaint)
saintsRouter.put('/:id', putSaint)
saintsRouter.delete('/:id', deleteSaint)

module.exports = saintsRouter
