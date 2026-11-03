import { useState, useEffect } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  const urls = 'https://jsonplaceholder.typicode.com/users'

  const details = async () => {
    try {
      const res = await fetch(urls)
      const data = await res.json()
      setUsers(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    details()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
