/**
 * Created by fangshifeng on 2017/7/3.
 */

'user strict'

import Realm from 'realm'

// Define your models and their properties

// 用户登录信息
class LoginUserStore extends Realm.Object {}
LoginUserStore.schema = {
    name: 'LoginUserStore'
    ,primaryKey: 'UserName'
    ,properties: {
        UserName: 'string'
        ,jsonResult: 'string'
        ,loginTime: 'date'
        ,loginFlag: 'bool'
    }
}

// TODO 添加更多Model

export default new Realm({ schema: [LoginUserStore] })
