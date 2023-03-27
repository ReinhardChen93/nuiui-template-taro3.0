import { Component, PropsWithChildren } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { getCurrentInstance, getWindowInfo, getTabBar } from '@tarojs/taro'
import './index.scss'
import { Button, Icon } from '@nutui/nutui-react-taro';
import { connect } from 'react-redux';
import type CustomTabBar from '../../custom-tab-bar'
import './index.scss'

type PropsType = {
  indexModel: {
    data: string
  },
  loading: any
}

type PageState = {
  current: number;
  showLoading: boolean;
  bannerList: Array<{
    typeTitle: string;
    pic: string;
    targetId: number;
  }>;
  searchValue: string;
  contentHeight: number;
};

// 将src/page/index/model.ts文件连接到src/page/index/index.tsx文件中
// 绑定indexModel
@connect((
  { loading, indexModel }: {
    loading: { effects: Record<string, boolean> };
    indexModel: {
      data: string
    }
  }
) => ({
  loadingStatus: loading.effects['indexModel/effectsDomeName'],
  indexModel
}))

class Index extends Component<PropsType, PageState> {

  pageCtx = getCurrentInstance().page

  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
    }; //初始化state

  }

  componentWillMount() { }

  componentDidMount() {
    this.init()
  }

  componentWillUnmount() { }

  componentDidShow() {
    const tabbar = getTabBar<CustomTabBar>(this.pageCtx)
    console.log('tabbar', tabbar)
    tabbar?.setSelected(0)
    tabbar?.getTabbarHeight()
  }

  componentDidHide() { }

  init = () => {
    let { windowHeight, screenHeight, statusBarHeight } = getWindowInfo()



  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  switchTab(value, url) {
    if (value !== 1) return;
    reLaunch({
      url: "/pages/mine/index"
    });
  }

  render() {
    const scrollTop = 0
    return (
      <ScrollView
        className='container'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
      // style={{height: this.state.contentHeight + 'px'}}
      >
        <Text>Hello world!</Text>
        <Button type="primary" className='btn'>主要按钮</Button>
        <Icon name="dongdong" />
        <Icon name="JD" />
        <Icon size="40" name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" />
      </ScrollView>
    )
  }
}

export default Index
