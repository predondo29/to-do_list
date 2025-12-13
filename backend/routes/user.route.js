import express from 'express' 
import userController from '../controllers/user.controller.js'
const router = express.Router()

// ! CRUD usuarios
// (R) READ - Obtener todos los usuarios
// Petición GET a /api/user/
router.get('/', userController.getAllUsers)
// (R) READ - Obtener un usuario por ID
// Petición GET a /api/user/:id
router.get('/:id', userController.getUserById)
// (R) READ - Obtener un usuario por Email
// Petición GET a /api/user/:email
router.get('/:email', userController.getUserByEmail)
// (U) UPDATE - Modificar un usuario por ID
// Petición PUT a /api/user/:id
router.put('/:id', userController.updateUser)
// (U) UPDATE - Agregar una nueva tabla de tareas al usuario
// Petición PUT a /api/user/:id/add-task
router.put('/:id/add-taskBoard', userController.addTaskBoard) 
// (C) CREATE - Crear un usuario
// Pretición POST a /api/user/register
router.post('/register', userController.registerUser)
// (C) CREATE - Crear token para loguearse
// Petición POST a /api/user/login
router.post('/login', userController.loginUser)
// (D) DELETE - Eliminar un freelancer
// Petición DELETE a /api/user/:id
router.delete('/:id', userController.deleteUser)

export default router