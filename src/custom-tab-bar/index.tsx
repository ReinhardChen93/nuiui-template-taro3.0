
import { Component, createRef } from 'react'
import { Tabbar, TabbarItem } from '@nutui/nutui-react-taro';
import { switchTab, createSelectorQuery, getWindowInfo } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import Clock from '../../assets/imgs/tabbar/clock.png';
import ClockActive from '../../assets/imgs/tabbar/clock_active.png';
import Tree from '../../assets/imgs/tabbar/tree.png';
import TreeActive from '../../assets/imgs/tabbar/tree_active.png';
import Music from '../../assets/imgs/tabbar/music.png';
import MusicActive from '../../assets/imgs/tabbar/music_active.png';

type TabBarProps = {

}

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      contentHeight: 0
    }
    this.footerRef = createRef()
  }



  componentDidShow() {
    let { windowHeight, screenHeight, statusBarHeight } = getWindowInfo()
    console.log('at-tab-bar :>> ', windowHeight);
    setTimeout(() => {


    }, 200);
  }

  handleSwitchTab = (value) => {
    this.setSelected(value)
    switch (value) {
      case 0:

        switchTab({
          url: '/pages/index/index'
        });
        break;
      case 1:

        switchTab({
          url: '/pages/menu/index'
        });
        break;
      case 2:

        switchTab({
          url: '/pages/mall/index'
        });
        break;
      case 3:

        switchTab({
          url: '/pages/order/index'
        });
        break;
      case 4:

        switchTab({
          url: '/pages/my/index'
        });
        break;
      default:
        break;
    }

  }
  setSelected(idx: number) {
    this.setState({
      selected: idx
    })
  }

  getTabbarHeight = () => {

  }
  render() {

    return (

      <View className='footer' id='footer' ref={this.footerRef}>
        <Tabbar
          unactiveColor='#9e9e9e'
          activeColor='#000000'
          activeVisible={this.state.selected}
          onSwitch={(child, id) => {
            this.handleSwitchTab(id)
          }}

        >

          <TabbarItem tabTitle='首页' href='/pages/index/index' icon='home' />
          <TabbarItem tabTitle='点单' href='/pages/menu/index' icon='category' />
          <TabbarItem tabTitle='商城' href='/pages/mall/index' icon='shop' />
          <TabbarItem tabTitle='订单' href='/pages/order/index' icon='order' />
          <TabbarItem tabTitle='我的' href='/pages/my/index' icon='my' />
        </Tabbar>
      </View>



    )
  }

}
