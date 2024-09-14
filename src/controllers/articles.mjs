const getArticlesHandler = (req, res) => {
    const articles = [
        { name: 'BTRC', body: 'BTRC forms committee to develop guidelines for satellite internet' },
        { name: 'NIST', body: 'NIST releases new digital identity and AI guidelines for contractors' }
    ]
    const title = 'Articles List'
    res.render( 'index.ejs', { articles, title })
}

const postArticlesHandler = (req, res) => {
    res.send('Post articles route')
}

const getArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    if (articleId === 1) {
        const articles =[
            { name: 'BTRC', body: 'BTRC forms committee to develop guidelines for satellite internet' },
        ]
        const title = 'Article Id 1'
        res.render('index.ejs', { articles, title })
    }
    if (articleId === 2) {
        const articles =[
            { name: 'NIST', body: 'NIST releases new digital identity and AI guidelines for contractors' }
        ]
        const title = 'Article Id 2'
        res.render('index.ejs', { articles, title })
    }

    res.send(`Get user by Id route: ${articleId}`)

}

const putArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.send(`Put article by Id route: ${articleId}`)
}

const deleteArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.send(`Delete article by Id route: ${articleId}`)
}

export {
    getArticlesHandler,
    postArticlesHandler,
    getArticleByIdHandler,
    putArticleByIdHandler,
    deleteArticleByIdHandler
}