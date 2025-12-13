import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import mongoose from 'mongoose'

// Función para retornar a todos los usuarios
const findAllUsers = async () => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        throw error
    }
}

//Función para obtener un usuario por ID
const findUserById = async (id) => {
    try {
        const user = await User.findById(id)
        return user
    } catch (error) {
        throw error
    }
}

//Función para encontrar usuario por EMAIL
const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        return user
    } catch (error) {
        throw error
    }
}

//Función para actualizar los datos de un usuario (Por ID)
const findAndUpdateById = async (userToChange) => {
    try {
        const user = await User.findByIdAndUpdate(userToChange.id, userToChange,
            {
                new: true,
                runValidators: true,
                omitUndefined: true,
            }
        )
        return user
    } catch (error) {
        throw error
    }
}

//Función para enlazar una nueba tabla de tareas al usuario (al array de tablas de tarea)
const addTaskBoard = async (id, taskBoardId) => {
    try {
        const user = await User.findById(id)
        
        if(!user) return null

        user.taskBoards.push(taskBoardId)

        const updatedUser = await user.save()

        return updatedUser
    } catch (error) {
        throw error
    }
}

//Función para crear un usuario nuevo
const createUser = async (userData) => {
    try {
        // ! 1. Creo una nueva instancia del modelo User
        const newUser = new User(userData)
        // ! 2. Guardo el documento en la base de datos
        const createdUser = await newUser.save()
        // ! 3. Retorno el usuario creado y guardado
        return createdUser
    } catch (error) {
        throw error
    }
}

//Función para verificar la contraseña
const verificatedPasword = async (password, user) => {
    try {
        const verification = await user.comparePasswords(password)
        return verification
    } catch (error) {
        throw error
    }
}

//Función para generar token al loguear
const generatedToken = (id) => {
    try {
        const options = {
            expriresIn: '1h',
        }
        return jwt.sign( 
            { id }, 
            process.env.JWT_SECRET,
            options,
        )
    } catch (error) {
        throw error
    }
}

//Función para eliminar un usuario de la base de datos
const deleteUser = async (id) => {
    try {
        await User.deleteOne(id)
        const user = await User.findOne(id)
        if(!user){//Si se elimino
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}

export default {
    findAllUsers,
    findUserById,
    findUserByEmail,
    findAndUpdateById,
    addTaskBoard,
    createUser,
    verificatedPasword,
    generatedToken,
    deleteUser,
}