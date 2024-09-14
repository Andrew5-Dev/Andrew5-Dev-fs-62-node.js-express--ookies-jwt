import express from 'express'
import router from './routes/index.mjs'
import {errors} from 'celebrate'
import logRequests from './middlewares/log.mjs'
import ejs from 'ejs'
import cookieParser from 'cookie-parser'


const PORT = 3000
const app = express()


app.set('view engine', 'pug')
app.set('views', './src/views')

app.engine('ejs', ejs.renderFile);
app.set('views-ejs', './src/views');

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
app.use(logRequests)
app.use(router)
app.use(errors())
app.use(express.static('src/public'))



app.use((err, req, res, next) => {
    if (!res.headersSent) {
        res.status(err.status || 500).json({
            status: err.status || 500,
            message: err.message || 'Internal Server Error'
        })
    }
})


app.listen(PORT, () => {
    console.log(`Server has started on http://localhost:${PORT}`)
})