
import express from 'express'
import "dotenv/config"
import userRouter from './routes/user.route.js'
// import taskRouter from './routes/task.route.js'
// import taskBoardRouter from './routes/taskBoard.route.js'

// !  Variables y constantes
const app = express()
const PORT = process.env.PORT || 8080

// !  Configuraciones

// ! Middlewares
// app.use(express().json())
// app.use(express().urlencoded( { extended: false } ))

// ! Rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/user', userRouter)
// app.get('/api/task', taskRouter)
// app.get('/api/taskBoard', taskBoardRouter)

// ! Arranque del servidor
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    
    app.listen(PORT, () => {
      console.log(`El servidor funciona en: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log('Error al conectarse a MongoDB:', error.message);
    process.exit(1)
  }
}

startServer()