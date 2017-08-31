import React from 'react';
import {Platform, BackHandler, Alert} from 'react-native';

export default class BaseComponent extends React.Component {
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', function () {
                Alert.alert(
                    'Message',
                    "App will be killed!",
                    [{
                        text: 'OK', onPress: () => {
                            BackHandler.exitApp(0);
                        }
                    }, {
                        text: 'No', onPress: () => {
                        }
                    }]
                );
                return true;
            });
        }

    }
}