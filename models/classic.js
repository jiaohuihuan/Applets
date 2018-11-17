import { HTTP } from '../util/http.js'

// 继承HTTP
class ClassicModel extends HTTP{
  getLatest(sCallabck){
    this.request({
      url:'classic/latest',
      success:(res)=>{
        sCallabck(res);
        // console.log(res);
      }
    })
  }
}

export { ClassicModel };