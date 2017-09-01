import {StackNavigator} from 'react-navigation'
import HomePage from  '../pages/home/HomePage'

export default HomeStackNav = new StackNavigator({
    HomePage: {
        screen: HomePage,
        path: 'app/home', //使用url导航时用到, 如 web app 和 Deep Linking
        navigationOptions: (navigation, screenProps) => ({
            title: global.i18n.t('hometab.home'),
            headerMode: 'screen',
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: '#25abff',
            },
            headerPressColorAndroid: '#3093ff',
        }),
    },
}, {
    initialRouteName: 'HomePage', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTintColor: 'white',
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
})