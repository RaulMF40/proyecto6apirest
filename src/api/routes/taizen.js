const {
  getTaizen,
  getTaizenById,
  postTaizen,
  putTaizen,
  deleteTaizen
} = require('../controllers/taizen')

const taizenRouter = require('express').Router()

taizenRouter.get('/:id', getTaizenById)
taizenRouter.get('/', getTaizen)
taizenRouter.post('/', postTaizen)
taizenRouter.put('/:id', putTaizen)
taizenRouter.delete('/:id', deleteTaizen)

module.exports = taizenRouter
