const router = require('express').Router()
const UserController = require('../controllers/UserController')
const authorization = require('../middlewares/authorization')

router.get('/:id', UserController.getById)
router.get('/', UserController.getAllUser)
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.put('/:id', authorization, UserController.update)
router.delete('/:id', authorization, UserController.delete)

module.exports = router