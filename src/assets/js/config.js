var Test = {
  host: 'http://yapi.demo.qunar.com/mock/12987'
}

Test.api = {
  receiver: {
    appointList: '/getAppointList', // 获取预约列表
    appointDetail: '/appoint_detail', // 获取预约详情
    appointQuery: '/appointQuery', // 预约查询
    addAppraise: '/addAppraise', // 预约评价
    login: '/receiverLogin' // 登录
  },
  supplier: {
    appointList: '/getAppointList', // 获取预约列表
    appointDetail: '/appoint_detail', // 获取预约详情
    snrList: '/snr_list', // 获取snr列表
    snrRecord: '/snr_record', // 获取snr创建二维码记录
    snrTest: '/test_snr', // 验证SNR
    modifyAppoint: '/modify_appoint', // 修改预约
    getHouse: '/get_house', // 获取仓库列表
    getcarLength: '/get_carlength', // 获取卡车长度
    getcodeDetail: '/code_detail', // 获取二维码详细记录
    submitAppoint: '/submit_appoint' // 提交预约
  }
}

export default {
  host: Test.host,
  api: Test.api
}
