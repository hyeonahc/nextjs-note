import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const AboutDetail: NextPage = () => {
  const router = useRouter()
  const id = Number(router.query.id)

  return (
    <>
      <h1>/pages/sub/[id].tsx</h1>
      <p>Parameter id: {id}</p>
      <a href='/'>/pages/index.tsx</a>
    </>
  )
}

export default AboutDetail
