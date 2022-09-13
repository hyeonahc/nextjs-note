// 서버 실행 명령어: node app.js

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080
const { posts } = require('./data.js')

app.use(cors())
// 서버주소/api/post로 접근했을때 posts 데이터를 응답해준다
// 현재 서버주소는 localhost:8080이므로 http://localhost:8080/api/posts에 접속하면 posts 데이터에 접근할 수 있다
app.get('/api/posts', (req, res) => {
  res.json(posts)
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))
