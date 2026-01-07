import express from 'express'
import taskController from '../controllers/task.controller.js'
const router = express.Router()


// ! CRUD de tareas
// (R) READ - Obtener una tarea
router.get('/:id', taskController.getTaskById)
// (C) CREATE - Crear una tarea en una tabla (ID tabla)
router.post('/', taskController.addTask)
// (D) DELETE - Eliminar una tarea por ID en una tabla
router.delete('/:id', taskController.deleteTask)
// (U) UPDATE - Modificar una tarea por ID en una tabla
router.put('/:id', taskController.updateTask)