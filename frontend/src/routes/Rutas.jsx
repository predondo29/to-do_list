import { useRoutes, Navigate } from 'react-router'
import Inicio from '../pages/Inicio'
import Dashboard from '../pages/Dashboard'
import Users from '../components/Test/Users'
import TaskBoards from '../components/Test/TaskBoards'
import Tasks from '../components/Test/Tasks'

const Rutas = () => {
    
  return useRoutes([
    // Rutas públicas
    { path: '/', element: <Inicio/> },

    // Rutas para usuarios registrados
    { path: '/dashboard', element: <Dashboard/> },
  
    // Rutas de testeo
    { path: '/users', element: <Users/>},
    { path: '/taskboards', element: <TaskBoards/>},
    { path: '/tasks', element: <Tasks/>},
  ])
}

export default Rutas