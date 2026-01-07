import mongoose from "mongoose"
const { Schema } = mongoose

const taskSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            enum: ["event", "task", "birthday"],
            required: true,
        },
        startDuration: {
            type: String,
        },
        finalDuration: {
            type: String,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Task = mongoose.model('Task', taskSchema, 'tareas')

export default Task