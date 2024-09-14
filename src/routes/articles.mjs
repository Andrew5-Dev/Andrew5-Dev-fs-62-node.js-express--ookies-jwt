import {Router} from 'express'
import {
    getArticlesHandler,
    postArticlesHandler,
    getArticleByIdHandler,
    putArticleByIdHandler,
    deleteArticleByIdHandler
} from '../controllers/articles.mjs'

import {validateParamsArticleId, validateArticlePost, validateArticlePut} from '../validators/articlesValidator.mjs'

const articlesRouter = Router()

articlesRouter.route('/').get(getArticlesHandler).post(validateArticlePost, postArticlesHandler)

articlesRouter
    .route('/:articleId')
    .get(validateParamsArticleId, getArticleByIdHandler)
    .put(validateParamsArticleId, validateArticlePut, putArticleByIdHandler)
    .delete(validateParamsArticleId, deleteArticleByIdHandler)


export default articlesRouter