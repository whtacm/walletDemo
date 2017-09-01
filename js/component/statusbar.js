import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';
import  theme from '../theme'

export default class TTStatusBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {translucent, hidden, backgroundColor} = this.props;
        console.log(translucent, hidden, backgroundColor);
        return <StatusBar translucent={translucent} hidden={hidden} animated={false}
                          backgroundColor={backgroundColor || theme.statusbar.backgroundColor}/>
    }
}