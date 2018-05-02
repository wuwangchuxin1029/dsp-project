const jwt = require('jsonwebtoken')
// const querystring = require('querystring')
const fs = require('fs')
const mock = require('mockjs')
const multer = require('multer')
// const http = require('http')
// const _ = require('lodash') // 引入第三方工具库（操作数组）

// 封装http.request请求远端数据的方法
// function queryApi(url, methods, params) {
//   return new Promise((resolve, reject) => {
//     const options = {
//       hostname: 'www.lb717.com',
//       port: 80,
//       path: url,
//       method: methods,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       }
//     }

//     let data = ''
//     // 在客户端的数据请求接口中使用http.request向远端发起数据请求，并将请求到的数据返回给客户端
//     let request = http.request(options, (response) => {
//       response.setEncoding('utf8')
//       response.on('data', (chunk) => {
//         // console.log(chunk,'CHUNKKKKK')
//         data += chunk
//       })
//       response.on('end', () => {
//         // console.log(data,'datata')
//         // 在结束远端数据请求时，将请求到的数据返回给客户端
//         resolve(JSON.stringify(data))
//       })
//     })
//     if (methods.toLowerCase() === 'post') {
//       request.write(querystring.stringify(params))
//     }
//     request.end()
//   })
// }

module.exports = function (app) {
  /**
   *  token字段是一个加密的字段也就是密钥，以保证网站用户信息安全。使用第三方包jsonwebtoken来生成密钥和解密
   */
  // 登录接口
  app.post('/dsp-admin/user/login', function (req, res) {
    // 读取注册信息数据库的内容
    let user = fs.readFileSync('user.json', { encoding: 'utf-8' })
    user = JSON.parse(user)
    // 将前端发的信息存入login变量中
    let login = req.body
    // 遍历注册数据库中的数据，并与客户端传来的信息对比
    let resInfo = { // 默认的返回信息
      success: 1,
      info: '用户名或密码错误'
    }
    user.forEach(userItem => {
      if (userItem.username === login.username && userItem.password === login.password) {
        resInfo.success = 0,
          resInfo.info = 'login success',
          resInfo.user = {
            name: userItem.username,
            time: new Date().toLocaleTimeString(),
            nickname: 'balabala'
          }
      }
    })
    // 生成token密钥(jwt.sign接收三个参数，第一个：，第二个：密钥名称，第三个：设定超时时间（秒）)
    if (resInfo.success === 0) {
      resInfo.token = jwt.sign(login, 'backstage', {
        expiresIn: 60 * 60 * 24
      })
    }
    res.end(JSON.stringify(resInfo))
  })
  // 请求线图数据
  app.post('/dsp-report/index', (req, res) => {
    let { startTime, endTime, dimLeft, dimRight } = req.body
    let mockData = mock.mock({
      'status': 0,
      'data': {
        exposeNum: 10000, // 曝光量
        clickNum: 1000, // 点击量
        clickRate: 100, // 点击率
        clickPrice: 10000, // 点击均价
        cpmPrice: 200000, // 千次展示均价
        consumed: 1000, // 时间段消耗(单位分)
        'dataY1|5': () => mock.Random.natural(1, 10000), // () => Random.natural(1,10000)
        dataY2: [1100, 1382, 1325, 1600, 1600]
      }
    })
    res.send(mockData)
  })
  /**
  * { fieldname: 'file', 文件域名
    originalname: 'jiji.jpg',图片名称
    encoding: '7bit',
    mimetype: 'image/jpeg' }
 */
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      let filename = file.originalname.split('.')
      cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
    }
  })

  var upload = multer({ storage: storage })
  // 上传图片接口
  app.post('/dsp-creative/creative/upload', upload.single('file'), (req, res) => {
    console.log(req.file.path, '******')
    res.send({
      'data': {
        'size': 2000,
        'value': '',
        'key': '123456'
      },
      'status': 0
    })
  })
}
