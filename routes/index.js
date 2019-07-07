var express = require('express')
var router = express.Router()
var postCtrl = require('../controllers/post')

router.get('/', postCtrl.index)
router.get('/:id', postCtrl.show)
router.post('/', postCtrl.create)
router.delete('/:id/', postCtrl.delete)

module.exports = router