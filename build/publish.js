var fs = require('fs')
var path = require('path')
var request = require('request');
var parseString = require('xml2js').parseString
var data = fs.readFileSync(__dirname + '/config.xml')
var appList = '', urlLogin = '', userName = '', password = '', JSESSIONID = ''
parseString(data.toString(), function (err, result) {
  appList = result.mobilePortal.appList
  urlLogin = result.mobilePortal.urlLogin
  userName = result.mobilePortal.userName
  password = result.mobilePortal.password
})
// 获取轻应用名称
var appName = JSON.parse(process.env.npm_config_argv).remain[0]
if (appName === undefined || JSON.stringify(appList).indexOf(appName) == -1) {
  console.log('请传入正确的轻应用名称，例如：npm run publish my-app')
  return
}

// 获取发布轻应用相关信息
var appInfo = appList.filter(function(item, index ,arr){
  return item.name[0] == appName
})
console.log(appName + '应用正在发布中,请等待片刻...')

/*
 ====================================
 =               login              =
 ====================================*/
httprequest(urlLogin[0])
function httprequest(url){
    request({
      url: 'http://yapi.demo.qunar.com/mock/9603/test',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(appName + '轻应用发布成功')
            JSESSIONID = response.headers['set-cookie'][0].split(';')[0].split('=')[1];
            clearInterval(loading)
        }
    });
};
var number = 0
var loading = setInterval(function(){
  console.log('已用时:'+ (number++) +'秒')
}, 1000)