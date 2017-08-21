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

const name = <Text>蜗牛慢慢跑</Text>;
export default class SnailApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    Welcome to SnailApp!
                </Text>
                {name}
            </View>
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