import React from 'react'
import {TabNavigator} from 'react-navigation';
import {StyleSheet, Image} from 'react-native'
import HomeStackNav from  './homeStackNav';
import MeStackNav from  './meStackNav';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../theme'

const IconArray = {};

global.tabicon = IconArray;

const styles = StyleSheet.create({
    icon: {
        width: 21,
        height: 21,
    },
})

const activeTintColor = '#ff8500';
const inactiveTintColor = '#999';

function geticon() {
    Icon.getImageSource('md-home', 50, activeTintColor).then((source) => {
        IconArray["homeActive"] = source;
    })
    Icon.getImageSource('md-home', 50, inactiveTintColor).then((source) => {
        IconArray["homeInactive"] = source;
    })
    Icon.getImageSource('md-person', 50, activeTintColor).then((source) => {
        IconArray["meActive"] = source;
    })
    Icon.getImageSource('md-person', 50, inactiveTintColor).then((source) => {
        IconArray["meInactive"] = source;
    });
}

geticon()

function getSource(name, tintColor) {
    var source;
    if ("md-home" === name) {
        if (tintColor === activeTintColor) {
            source = IconArray["homeActive"];
        } else {
            source = IconArray["homeInactive"];
        }
    }
    if ("md-person" === name) {
        if (tintColor === activeTintColor) {
            source = IconArray["meActive"];
        } else {
            source = IconArray["meInactive"];
        }
    }
    return source;
}

export default HomeTabNav = new TabNavigator({
    HomeStackNav: {
        screen: HomeStackNav,
        navigationOptions: (navigation, screenProps) => ({
            tabBarLabel: global.i18n.t('hometab.home'),
            tabBarIcon: ({tintColor}) => (
                <Image source={getSource('md-home', tintColor)} style={[{tintColor: tintColor}, styles.icon]}/>),
        })
    },
    MeStackNav: {
        screen: MeStackNav,
        navigationOptions: (navigation, screenProps) => ({
            tabBarLabel: global.i18n.t('hometab.me'),
            tabBarIcon: ({tintColor}) => (
                <Image source={getSource('md-person', tintColor)} style={[{tintColor: tintColor}, styles.icon]}/>),
        })
    }
}, {
    initialRouteName: 'HomeStackNav',
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    lazy: true,
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: activeTintColor,//'#ff8500', // 文字和图片选中颜色
        inactiveTintColor: inactiveTintColor,//'#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        upperCaseLabel: false,
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
        pressColor: theme.statusbar.backgroundColor,
    },
    onTransitionStart: () => {
        console.log('start')
    },
    onTransitionEnd: () => {
        console.log('end')
    },
})