import Task from '../models/task.model.js'


const findTaskById = async (id) => {
    try {
        const task = await Task.findById(id)
    } catch (error) {
        throw error
    }
}
const creatTask = async (taskData) => {
    try {
        // ! 1. Creo una instancia del model de Task
        const newTask = new Task(taskData)
        // ! 2. Guardo el documento en la base de datos
        const createdTask = await newTask.save()
        // ! 3. Retorno el usuario creado y guardado
        return createdTask
    } catch (error) {
        throw error
    }
}
const deleteTask = async (id) => {
    try {
        await Task.deleteOne(id)
        const task = await Task.findById(id)
        if(!task) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}
const findandUpdateById = async (taskToUpdate) => {
    try {
        const task = await Task.findByIdAndUpdate(tasktToUpdate.id, taskToUpdate,
            {//Configuracion del update
                new: true,
                runValidators: true,
                ometUNdefined: true,
            }
        )
        return task
    } catch (error) {
        throw error
    }
}

export default {
    findTaskById,
    creatTask,
    deleteTask,
    findandUpdateById,
}