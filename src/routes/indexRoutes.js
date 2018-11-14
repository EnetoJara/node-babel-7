import { Router } from 'express'
import { home } from '../controllers/indexController'
const api = Router()

api.get('/', home)

export default api