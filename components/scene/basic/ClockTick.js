/**
 * Created by fangshifeng on 2017/7/3.
 */
'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * 时钟
 *
 * 1. 两个生命周期的使用
 * 2. state的使用
 * 3. 非render数据的存储方式
 * 4. 类组件：Components and Props
 */

export default class ClockTick extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        // 创建定时器
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        // 解除定时器
        clearInterval(this.timeID);
    }

    formatName = (user) => {
        return user.firstName + user.lastName
    }

    // 时钟运转
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const user = {
            firstName: 'lucky'
            ,lastName: 'fang'
        };

        const element = (
            <Text>Hello, {this.formatName(user)}</Text>
        );

        return (
            <View style={styles.container}>
                <Text>{this.state.date.getSeconds()}</Text>
                {element}
                <Welcome name="蜗牛慢慢跑"/>
            </View>
        );
    }
}

//类组件
class Welcome extends Component{
    render() {
        return(
            <Text>Hello,{this.props.name}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});