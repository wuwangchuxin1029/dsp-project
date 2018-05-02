const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')
const app = express()
const jwt = require('jsonwebtoken')
app.use(bodyParser.json())

// 封装解密token字段进行验证的方法，放在中间件中使用
function verifyToken (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'backstage', function (err, decoded) {
      if (err) {
        reject(err)
      } else {
        resolve(decoded)
      }
    })
  })
}
// 应用集中间件
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Token, token,  plantform')
  res.header('Content-Type', 'application/json;charset=utf-8')
  verifyToken(req.headers.token).then(res => {
    console.log(res, 'tokennnnn')
  })
  next()
})

api(app)

app.listen(9990, function () {
  console.log('server listen 9990')
})
