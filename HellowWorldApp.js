import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from './Image';

export default class HellowWorldApp extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hello, World!</Text>
                <Bananas/>
            </View>
        )
    }
}