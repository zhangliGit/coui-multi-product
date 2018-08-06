let baseUrl = ''
if (process.env.NODE_ENV === 'testing') { // 测试环境
  baseUrl = 'https://10.248.65.150/GetTravelMethod'
} else if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = 'https://10.248.65.100/GetTravelMethod'
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  baseUrl = 'https://10.248.65.200/GetTravelMethod'
}
export {
  baseUrl
}
