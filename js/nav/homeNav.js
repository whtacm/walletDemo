import {TabNavigator} from 'react-navigation'
import HomePage from  '../pages/home/HomePage'
import MePage from  '../pages/me/MePage'

export default HomeNav = new TabNavigator({
    Home: {
        screen: HomePage,
        tabBarOptions: {
            tabbar: {
                label: '首页',
                // icon: ({tintColor}) => (<Image source={require('./app/images/me.png')} style={[{tintColor: tintColor},styles.icon]}/>),
            }
        }
    },
    Me: {
        screen: MePage,
        tabBarOptions: {
            tabbar: {
                label: '我',
                // icon: ({tintColor}) => (<Image source={require('./app/images/me.png')} style={[{tintColor: tintColor},styles.icon]}/>),
            }
        }
    }
}, {
    initialRouteName: 'Home',
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
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
    },
})