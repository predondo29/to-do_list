import mongoose from "mongoose" 
const { Schema } = mongoose

const taskBoardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        }],
    },
    {
        versionKey: false, //Eliminamos el "__v" de mongo
        timestamps: true,
    }
)

const TaskBoardModel = mongoose.model('TaskBoard', taskBoardSchema, 'tablaTareas')

export default TaskBoardModel