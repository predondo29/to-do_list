import mongoose from "mongoose"
const { Schema } = mongoose

const taskSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        type: {
            enum: ["event", "task", "birthday"],
            requires: true
        },
        startDuration: {
            
        },
        finalDuration: {

        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const TaskModel = mongoose.model('Task', taskSchema, 'task')

export default TaskModel