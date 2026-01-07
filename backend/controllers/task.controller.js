import taskService from '../services/task.service.js'

const getTaskById = async(req, res) => {
    const id = req.body._id
    console.log(id);
    try {
        const task = await taskService.findTaskById(id)
        res.send(task)
    } catch (error) {
        return new Error({ message: 'No se encontró la tarea'})
    }
}
const addTask = async(req, res) => {
    const taskData = req.body
    console.log(taskData);
    try {
        const createdTask = await taskService.creatTask(taskData)
        res.send(createdTask)
    } catch (error) {
        return new Error({ message: 'No se pudo crear la tarea'})
    }
}
const deleteTask = async(req, res) => {
    const id = req.body._id
    console.log(id);
    try {
        const deletedTask = await taskService.deleteTask(id)
        if(deletedTask){
            res.status(200).json({
                message: 'Se eliminó la tarea exitosamente'
            })
        } else {
            res.status(500).json({
                message: 'Error al eliminar la tarea'
            })
        }
    } catch (error) {
        return new Error({ message: ''})
    }
}
const updateTask = async(req, res) => {
    const taskToUpdate = req.body
    console.log(taskToUpdate);
    try {
        const updatedTask = await taskService.findandUpdateById(taskToUpdate)
        res.send(updatedTask)
    } catch (error) {
        return new Error({ message: ''})
    }
}

export default {
    getTaskById,
    addTask,
    deleteTask,
    updateTask,
}