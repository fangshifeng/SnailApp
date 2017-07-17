/**
 * Created by fangshifeng on 2017/7/3.
 */
'user strict'

import Immutable from 'immutable'
import { createStore } from '../utils/StoreUtils'
import { register } from '../dispatcher/DispatcherUtils'
import RealmStore from './RealmStore'

// 创建空字典
let _user = Immutable.Map();

const UserStore = createStore({
    getUser() {
        return _user.toJS()
    }
})

UserStore.dispatchToken = register(action => {
    switch(action.type) {
        // 用户登录成功
        case 'USER_LOGIN_SUCCESS':
            if(action.response) {
                if(action.response.status === 1) {
                    console.log('action.response = ' + JSON.stringify(action.response))

                    // 将用户数据存入字典中
                    _user = Immutable.Map(action.response)
                    // 触发事件
                    UserStore.emitChange()

                    // 从所有登录用户信息中挑选出当前登录用户的数据
                    let store_login_user = RealmStore.objects('LoginUserStore').filtered('UserName="' + action.response.data.username + '"')
                    RealmStore.write(() => {
                        // 在添加Primary key情况下
                        if(store_login_user.length < 1) {
                            // 不存在，创建新Object
                            RealmStore.create('LoginUserStore', {UserName: action.response.data.username, jsonResult: JSON.stringify(action.response), loginTime: new Date(), loginFlag: true})
                        } else {
                            // 存在，更新原有Object
                            RealmStore.create('LoginUserStore', {UserName: action.response.data.username, jsonResult: JSON.stringify(action.response), loginTime: new Date(), loginFlag: true}, true)
                        }
                    })
                }
            }
            break
    }
})

export default UserStore

