/**
 * Created by fangshifeng on 2017/7/4.
 */

'user strict'

import { AsyncStorage } from 'react-native'
import { dispatchAsync } from '../dispatcher/DispatcherUtil'
import ActionTypes from '../constants/ActionTypes'

let login_url = ''

export function _login(loginData) {
    let loginForm = new FormData();
    loginForm.append("username", loginData.username)
    loginForm.append("password", loginData.password)

    return fetch(login_url, {
        method: 'POST'
        ,headers: {}
        ,body: loginForm
    }).then((response) => {
        if(response.ok) {
            return response.json();
        }
    })
}

export function doUserLogin(loginData) {
    dispatchAsync(_login(loginData), {
        request: ActionTypes.USER_LOGIN,
        success: ActionTypes.USER_LOGIN_SUCCESS,
        failure: ActionTypes.USER_LOGIN_ERROR
    }, loginData);
}

function _doGet(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: {}
        })
        .then((response)=>{
            if(response.ok){
                // 加入缓存
                return response.json();
            }
        })
        .then((responseJson)=>{
            // 更新缓存
            AsyncStorage.setItem(hash, JSON.stringify(responseJson));
            console.log("cache_refreshed." + hash);
            resolve(responseJson);
        }).catch((error)=>{
            reject(error);
        });
    });
}

// 通用POST请求
function _doPost(url, formData) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {

            },
            body: formData
        })
            .then((response)=>{
                if(response.ok){
                    return response.json();
                }
            })
            .then((responseJson)=>{
                resolve(responseJson);
            }).catch((error)=>{
            reject(error);
        });
    });
}

