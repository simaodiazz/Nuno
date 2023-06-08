const { User } = require('../models/user')

const create = async(request, response) => {
 
    const { gender, email, username, password } = request.body

    const user = await User.create({
        gender,
        email,
        username,
        password
    })
}