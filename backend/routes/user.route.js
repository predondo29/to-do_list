import express from 'express' 
import userController from '../controllers/user.controller.js'
const usersRouter = express.Router()

// ! CRUD usuarios
// (R) READ - Obtener todos los usuarios
// Petición GET a /api/user/
usersRouter.get('/', userController.getAllUsers)
// (R) READ - Obtener un usuario por ID
// Petición GET a /api/user/:id
usersRouter.get('/:id', userController.getUserById)
// (R) READ - Obtener un usuario por Email
// Petición GET a /api/user/:email
usersRouter.get('/:email', userController.getUserByEmail)
// (U) UPDATE - Modificar un usuario por ID
// Petición PUT a /api/user/:id
usersRouter.put('/:id', userController.updateUser)
// (U) UPDATE - Agregar una tarea a la tabla de tareas del usuario
// Petición PUT a /api/user/:id/add-task
usersRouter.put('/:id/add_task', userController.addTask)
// (C) CREATE - Crear un usuario
// Pretición POST a /api/user/register
usersRouter.post('/register', userController.registerUser)
// (C) CREATE - Crear token para loguearse
// Petición POST a /api/user/login
usersRouter.post('/login', userController.loginUser)
// (D) DELETE - Eliminar un freelancer
// Petición DELETE a /api/user/:id
usersRouter.delete('/:id', userController.deleteUser)