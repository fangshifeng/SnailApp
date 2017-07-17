/**
 * Created by fangshifeng on 2017/7/3.
 */

'use strict'

import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as SnailApi from '../../api/SnailApi'
import { register } from '../../dispatcher/DispatcherUtil'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ''
            ,password: ''
        };
    }

    componentDidMount() {
        register(action => {
            switch(action.type) {
                case 'USER_LOGIN_SUCCESS':
                    console.log('USER_LOGIN_SUCCESS = ' + JSON.stringify(action.response))

                    // {type: ActionConst.RESET} 解决Home时点击返回键，退回到登录页面的问题
                    Actions.home({type: ActionConst.RESET})

                    break
                case 'USER_LOGIN_ERROR':
                    console.log('USER_LOGIN_ERROR = ' + JSON.stringify(action.response))

                    break
            }
        })
    }

    _doLogin() {
        SnailApi.doUserLogin(this.state)
    }

    render() {
        return (
            <View>
                <View style={{ height:44, backgroundColor:'#25A2E1', alignItems:'center', justifyContent:'center'}}>

                    <Text style={{ fontSize:18, color:'#FFFFFF'}}>SnailAPP</Text>

                </View>

                <View style={{ flexDirection:'row', alignItems:'center', marginTop:72}}>
                    <Image style={{ width:16, height:16, marginLeft:35 }}
                           source={ require('../../assets/theme/default/image/user/username.png')}/>
                    <Text style={{ marginLeft:8, fontSize:15, color:'#333333'}}>账号</Text>
                    <TextInput underlineColorAndroid='transparent'
                               style={{width:160, marginTop:2 }}
                               placeholderTextColor='#999999'
                               placeholder='请输入你的账号'
                               onChangeText={(username) => this.setState({username})} value={this.state.username}/>
                </View>
                <View style={{ height:1, backgroundColor:'#999999', marginLeft:35, marginRight:35, marginTop:5 }}/>

                <View style={{ flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <Image style={{ width:16, height:16, marginLeft:35 }}
                           source={ require('../../assets/theme/default/image/user/pw.png')}/>
                    <Text style={{ marginLeft:8, fontSize:15, color:'#333333'}}>密码</Text>
                    <TextInput underlineColorAndroid='transparent'
                               style={{width:160, marginTop:2 }}
                               placeholderTextColor='#999999'
                               placeholder='请输入你的密码'
                               onChangeText={(password) => this.setState({password})}
                               value={this.state.password}/>
                </View>
                <View style={{ height:1, backgroundColor:'#999999', marginLeft:35, marginRight:35, marginTop:5 }}/>
                <TouchableOpacity onPress={()=>this._doLogin()}>
                    <View
                        style={{backgroundColor: '#25A2E1', margin: 35, borderRadius: 5, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{color:'#FFFFFF', fontSize: 14, textAlign:'right', padding:12}}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

