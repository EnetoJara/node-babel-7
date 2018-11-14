import { Router } from 'express'
import { postRegister } from '../controllers/userController'

const router = Router()

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', postRegister)

export default router
