import bcrypt from "bcrypt"
import mongoose from 'mongoose'
const { Schema } = mongoose
const saltRounds = 10

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        taskBoards: [{ //Un usuario puede tener varios tablones de tareas para dividir las tareas en categorías
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TaskBoard',
        }],
        role: {
            type: String,
            enum: ["usuario", "admin"],
            default: "usuario",
        }
    },
    {
        versionKey: false, //Quita el "__v" de mongo
        timestamps: true, //Agrega el atime, mtime y ctime
    }
)

userSchema.pre('save', async function (next) {
    // ! 1. Verificar para evitar re-hashear
    //Si no se modifico la contraseña entonces no hago nada
    if (!this.isModified('password')) {
        return next()
    }
    //Si se modifico la contraseña entonces
    try {
        // ! 2. Lógica del Hasheo
        const salt = await bcrypt.genSalt(saltRounds)
        this.password = await bcrypt.hash(this.password, salt)
        // ! 3. Finalizo el middleware
        return next()
    } catch (error) {
        // Si hay un error, lo pasamos a next para que Mongoose lo maneje
        next(error)
    }
})

userSchema.methods.comparePasswords = async (checkPassword) => {
    try {
        const passwordHashed = await encryptPassword(checkPassword)
        if(passwordHashed !== this.password){
            return false
        } else {
            return true
        }
    } catch (error) {
        throw error
    }
}

const User = mongoose.model("User", userSchema, "usuarios")

export default User