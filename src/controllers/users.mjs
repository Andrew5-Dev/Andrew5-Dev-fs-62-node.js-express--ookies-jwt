const getUsersHandler = (req, res) => {
    const users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 }
    ]
    const title = 'Users List'
    res.render('users', { users, title })
}

const postUsersHandler = (req, res) => {
    res.send('Post users route')
}

const getUserByIdHandler = (req, res) => {
    const {userId} = req.params

    if (userId === 1) {
        const users =[
            { name: 'John', age: 30 }
          ]
        const title = 'User Id 1'
        res.render('users', { users, title })
    }
    if ( userId === 2) {
        const users =[
            { name: 'Jane', age: 25 }
          ]
        const title = 'User Id 2'
        res.render('users', { users, title })
    }

    res.send(`Get user by Id route: ${userId}`)

}

const putUserByIdHandler = (req, res) => {
    const {userId} = req.params
    res.send(`Put user by Id route: ${userId}`)
}
const deleteUserByIdHandler = (req, res) => {
    const {userId} = req.params
    res.send(`Delete user by Id route: ${userId}`)
}


export {
    getUsersHandler,
    postUsersHandler,
    getUserByIdHandler,
    putUserByIdHandler,
    deleteUserByIdHandler}