import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Button } from '@nutui/nutui-react-taro';
import { Icon } from '@nutui/nutui-react-taro';
export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button type="primary" className='btn'>主要按钮</Button>
        <Icon name="dongdong" />
    <Icon name="JD"/>
    <Icon size="40"  name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"/>
      </View>
    )
  }
}
