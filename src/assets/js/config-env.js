let baseUrl = ''
if (process.env.NODE_ENV === 'testing') { // 测试环境
  baseUrl = 'http://testing'
} else if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = 'http://development'
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  baseUrl = 'http://production'
}
export {
  baseUrl
}
