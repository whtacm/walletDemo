import {StackNavigator} from 'react-navigation'
import HomeTabNav from  './homeTabNav'
import Entry from  '../entry'

export default EntryStackNav = new StackNavigator({
    EntryPage: {
        screen: Entry,
        navigationOptions: {
            title: 'Welcome',
            navigationBarHidden: true,
        },
    },
    HomeTabNav: {
        screen: HomeTabNav,
        path: 'app/home', //使用url导航时用到, 如 web app 和 Deep Linking
        navigationOptions: {
            headerMode: 'screen',
            gesturesEnabled: false,
        },  // 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文
    }
}, {
    initialRouteName: 'EntryPage', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
})