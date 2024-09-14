import {Router} from 'express'
import {
  getLoginHandler,
  postLoginHandler,
} from '../controllers/login.mjs'

const loginRouter = Router()


loginRouter
  .route('/')
  .get(getLoginHandler)
  .post(postLoginHandler)


export default loginRouter