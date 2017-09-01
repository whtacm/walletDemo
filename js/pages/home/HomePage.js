import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import BaseComponent from  '../base/BaseComponent';
import theme from '../../theme'

export default class HomePage extends BaseComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    backgroundColor={theme.statusbar.backgroundColor}
                    barStyle="light-content"
                />
                <Text style={styles.welcome}>HomePage</Text>
            </View>
        );
    }

    componentDidMount() {
        console.log('mount')
    }

    componentWillUnmount() {
        console.log('unmount')
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