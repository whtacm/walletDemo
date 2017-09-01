import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';
import getMarkets from './dao/markets'
import storageUtil from './storage/storageUtil'
import I18n, {getLanguages} from 'react-native-i18n';

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
    'en': require('../locales/en'),
    'zh': require('../locales/zh')
};

getLanguages().then(languages => {
    console.log(languages) // ['en-US', 'en']
})

global.i18n = I18n;

global.kvstorage = storageUtil;

export default class wallet extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    translucent={true}
                    barStyle="light-content"
                />
                <Text style={styles.welcome}>{global.i18n.t('app')}</Text>
                <Text style={styles.instructions}>sadfasdfasdfasdfsa</Text>
            </View>
        );
    }

    componentWillMount() {
        console.disableYellowBox = true;
        storage.load({
            key: 'lng',
            // autoSync(default true) means if data not found or expired,
            // then invoke the corresponding sync method
            autoSync: true,

            // syncInBackground(default true) means if data expired,
            // return the outdated data first while invoke the sync method.
            // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
            syncInBackground: true,

            // you can pass extra params to sync method
            // see sync example below for example
            syncParams: {
                extraFetchOptions: {
                    // blahblah
                },
                someFlag: true,
            },
        }).then(ret => {
            global.i18n.locale = ret;
        }).catch(err => {
            console.log(err);
            global.i18n.locale='zh';
            console.log(global.i18n.t('hometab.home'))
        })
    }

    componentDidMount() {
        getMarkets().then(data => {
            // console.log(data)
            global.kvstorage.save({
                key: "yunbimarkets",
                data: data
            });

            const {navigate} = this.props.navigation;
            setTimeout(function () {
                navigate('HomeTabNav');
            }, 100)

        }).catch(err => {
            console.log(err)
        });
    }

    componentWillUnmount() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25abff',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5,
    },
});
