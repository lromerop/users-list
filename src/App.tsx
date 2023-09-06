import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UserList'
import { getUsersByPage } from './services/user.service'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurretPage] = useState<number>(0)

  useEffect(() => {
    getUsersByPage(currentPage)
      .then((users: User[]) => { setUsers(previousUsers => previousUsers.concat(users)) })
      .catch((err: Error) => { console.log(err) })
  }, [currentPage])

  return (
    <div className='App'>
      <p>Lista de usuarios</p>
      <UsersList users={users}/>
      <div>
        <button onClick={() => { setCurretPage(previousPage => previousPage + 1) }}>Cargar más usuarios</button>
      </div>
    </div>
  )
}

export default App
