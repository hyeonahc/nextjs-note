import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Fetch: NextPage = () => {
  const [user, setUser] = useState({ name: null })

  useEffect(() => {
    fetch(process.env.API_URL + 'api/hello')
      .then(type => type.json())
      .then(result => {
        setUser(result)
      })
  })

  return (
    <>
      <h1>/pages/sub/fetch.tsx</h1>
      <p>{user.name}</p>
      <a href='/'>/pages/index.tsx</a>
    </>
  )
}

export default Fetch
