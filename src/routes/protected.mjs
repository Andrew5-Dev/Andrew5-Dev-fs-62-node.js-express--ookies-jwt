import {Router} from 'express'
import { authenticateJWT, getLoginHandler, postLoginHandler } from '../controllers/login.mjs'
import { getProtectedHandler } from '../controllers/protected.mjs'
import loginRouter from './login.mjs'


const protectedRouter = Router()

protectedRouter
  .route('/')
  .get(getProtectedHandler)



protectedRouter.route('/protected')
  .get(getProtectedHandler)


export default protectedRouter