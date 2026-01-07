import { useRoutes, Navigate } from 'react-router'
import Inicio from '../pages/Inicio'
import Dashboard from '../pages/Dashboard'

const Rutas = () => {
    
  return useRoutes([
    // Rutas públicas
    { path: '/', element: <Inicio/> },

    // Rutas para usuarios registrados
    { path: '/dashboard', element: <Dashboard/> }
  ])
}

export default Rutas