import { Link } from 'react-router'

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenid@!</h1>

      <p>Ir a testear back de usuarios</p>
      <Link to='/users'>
        <button className='btn bg-blue-300 border rouded rounded-lg m-2 py-1 px-2 cursor-pointer hover:bg-blue-600'>Usuarios</button>
      </Link>

      <p>Ir a testear tablas de tareas</p>
      <Link to='/taskboards'>
        <button className='btn bg-blue-300 border rouded rounded-lg m-2 py-1 px-2 cursor-pointer hover:bg-blue-600'>Tablas de tareas</button>
      </Link>

      <p>Ir a testear tareas de tablas de tareas</p>
      <Link to='/tasks'>
        <button className='btn bg-blue-300 border rouded rounded-lg m-2 py-1 px-2 cursor-pointer hover:bg-blue-600'>Tareas</button>
      </Link>

    </div>
  )
}

export default Inicio