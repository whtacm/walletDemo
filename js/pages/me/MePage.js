import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import BaseComponent from  '../base/BaseComponent';

export default class HomePage extends BaseComponent {
    constructor(props){
        super(props)
    }

    static navigationOptions = {
        title: 'Me',
        headerMode: 'screen',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>MePage</Text>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount(){

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#000',
    },
});