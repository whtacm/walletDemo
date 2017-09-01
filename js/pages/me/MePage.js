import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import BaseComponent from  '../base/BaseComponent';
import TTStatusBar from '../../component/statusbar'

export default class MePage extends BaseComponent {
    constructor(props) {
        super(props);
        console.log('constructor')
        this.state = {
            translucent: false,
        }
    }

    static ons = function () {

    };

    render() {
        return (
            <View style={styles.container}>
                <TTStatusBar
                    translucent={this.state.translucent}/>
                <Text style={styles.welcome}>MePage</Text>
            </View>
        );
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
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