import userService from '../services/user.service.js'

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.findAllUsers()
        res.send(users)
    } catch (error) {
        res.json({ message: 'Error al obtener los usuarios'})
    }
}
const getUserById = async (req, res) => {
    const id = req.body._id
    console.log(id);
    try {
        const user = await userService.findUserById(id)
        res.send(user)
    } catch (error) {
        return new Error({ message: 'Error al cargar al usuario'})
    }
}
const getUserByEmail = async (req, res) => {
    const email = req.body.email
    console.log(email);
    try {
        const user = await userService.findUserByEmail(email)
        res.send(user)
    } catch (error) {
        return new Error({ message: 'Error al cargar al usuario'})
    }
}
const updateUser = async (req, res) => {
    const userToChange = req.body
    console.log(userToChange);
    try {
        const userChanged = await userService.findAndUpdateById(userToChange)
        res.send(userChanged)
    } catch (error) {
        return new Error({ message: 'Error al actualizar el usuario'})
    }
}
const addTaskBoard = async (req, res) => {
    const newTaskBoard = req.body
    console.log(newTaskBoard);
    try {
        const newTask = await userService.createTaskBoard(newTaskBoard)
        res.send(newTask)
    } catch (error) {
        return new Error({ message: 'Error al crear la tabla'})
    }
}
const registerUser = async (req, res) => {
    const userData = req.body
    try {
        const createdUser = await userService.createUser(userData)
        res.send(createdUser)
    } catch (error) {
        return new Error({ message: 'Error al registrar al usuario'})
    }
}
const loginUser = async (req, res) => {
    try {
        // Leo los datos de loguin
        const { email, password } = req.body
        // ! 1. Busco al usuario para verificar si existe
        const user = await userService.getUserByEmail(email)
        if (!user){//Si el usuario no existe
            return res.status(404).json({ message: 'Credenciales inválidas' })
        }
        // ! 2. Verifico si: a) el usuario existe y b) la contraseña es correcta
        const passwordVerification = await userService.verificatedPassword(password, user)
        if( user && passwordVerification ) {
            // ! 3. Genero el token de login
            const token = await userService.generateToken(user._id)

            // ! 4. retorno una respuesta exitosa 
            res.status(200).json({
                message: 'Login exitoso',
                token: token,
            })
        } else {
            // Se ingresó una contraseña incorrecta
            res.status(401).json({ message: 'Credenciales inválidas'})
        }
        res.send('funciona')
    } catch (error) {
        return new Error({ message: 'Error al loguear'})
    }
}
const deleteUser = async (req, res) => {
    const id = req.user._id //No sé si sería así
    try {
        const userDeleted = await userService.deleteUser(id)
        res.status(200).json({
            message: 'Se eliminó la cuenta exitosamente'
        })
    } catch (error) {
        return new Error({ message: 'Error al eliminar usuario'})
    }
}



export default {
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    addTaskBoard,
    registerUser,
    loginUser,
    deleteUser,
    
}