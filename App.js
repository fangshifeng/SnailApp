/**
 * Created by fangshifeng on 2017/7/3.
 */
'use strict'

import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Scene, Router, Modal } from'react-native-router-flux'
import Login from './components/scene/user/Login'
import Home from './components/scene/Home'
import { dispatch } from './components/dispatcher/DispatcherUtils'
import RealmStore from './components/stores/RealmStore'
import ActionTypes from './components/constants/ActionTypes'

import ClockTick from './components/scene/basic/ClockTick'

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = Platform.OS == 'ios' ? (computedProps.hideNavBar ? 0 : 64) : (computedProps.hideNavBar ? 0 : 54);
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
}

export default class App extends Component {
    loginFlag: true

    constructor(props) {
        super(props);

        // 按照登录成功时间倒叙
        let stored_login_user = RealmStore.objects('LoginUserStore').sorted('loginTime', {ascending: false})
        if(stored_login_user.length > 0) {
            if(JSON.parse(stored_login_user[0].loginFlag)) {
                // 已登录
                dispatch(ActionTypes.USER_LOGIN_SUCCESS, {response: JSON.parse(stored_login_user[0].jsonResult)})
                this.loginFlag = true
            }
        }
    }

    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar hideTabBar navigationBarStyle={{ backgroundColor:'#ffffff' }} titleStyle={{color:'#333333'}}>
                        <Scene key="login" hideNavBar component={Login} title="登录"/>
                        <Scene key="home" hideNavBar component={Home} title="首页"/>
                        <Scene key="clockTick" initial={true} hideNavBar={false} component={ClockTick} title="ClockTick"/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}