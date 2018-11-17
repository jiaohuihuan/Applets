import {config} from '../config.js';

// 错误码
const tips = {
  1:'抱歉，出现了一个错误',
  1005:'appkey无效，请前往www.7yue.pro申请',
  3000:'期刊不存在'
}

class HTTP{
  request(params){
    // 判断用户是否传params，若没有就给默认值
    if(!params.method){
      params.method="GET"
    }
    wx.request({
      url:config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString();
        if (code.startsWith('2')){
          // 如果params.success存在是执行params.success(res.data)传参，若不存在则不执行
          params.success && params.success(res.data);

          // else服务器异常
        }else{
          let error_code = res.data.error_code;
          this._show_error(error_code)
        }
      },

      // fail调用api失败
      fail:(err)=>{
        this._show_error(1)
      }

    })
  }
  _show_error(error_code){
    if(!error_code) {
      error_code = 1
    }

    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

  
export { HTTP };