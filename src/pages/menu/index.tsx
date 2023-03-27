import React, { useState, useEffect, useMemo } from 'react'
import { View, ScrollView } from '@tarojs/components';
import { createSelectorQuery, useReady, useDidShow, useDidHide, usePullDownRefresh, getWindowInfo, getCurrentInstance, getTabBar } from '@tarojs/taro';
// import InLineGoods from '@/components/InLineGoods';
import type CustomTabBar from '../../custom-tab-bar'

import './index.scss';

type Props = {
  serviceList: Array<{}>
}
let testList = [
  {
    name: '时令鲜果1',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果2',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果3',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果4',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果5',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果6',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果7',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  },
  {
    name: '时令鲜果8',
    goods: [
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      },
      {
        name: '多肉葡萄冰棒'
      }
    ]
  }
]

const Menu = (props: Props) => {
  const pageCtx = useMemo(() => getCurrentInstance().page, [])
  const { serviceList = testList } = props
  const [selectId, setSelectId] = useState<string>('');
  const [navActive, setNavActive] = useState<number>(0);
  const [toolHeight, setToolHeight] = useState<number>(0)

  const navClick = (index) => {
    setNavActive(index)
    setSelectId('item' + index)
  }

  //页面加载时执行的方法
  const [scrollVal, setScrollVal] = useState(0 as number)
  const [heightArr, setHeightArr] = useState([] as Array<any>)
  const [distance, setDistance] = useState(0 as number)
  const [winHeight, setWinHeight] = useState<number>(0)
  
  useReady(() => {
    
  })

  useDidShow(() => {
    const tabbar = getTabBar<CustomTabBar>(pageCtx)
    tabbar?.setSelected(1)
  })

  useEffect(() => {
    if (serviceList.length > 0) {
      init()
      setTimeout(() => {
        selectHeight()
      }, 1000);

    }
  }, [serviceList, winHeight])


  const init = () => {
    let { windowHeight, screenHeight, statusBarHeight } = getWindowInfo()
    console.log('windowHeight', windowHeight, screenHeight, statusBarHeight)
    setTimeout(() => {
      const other = createSelectorQuery()
 
      other.select('#category').boundingClientRect()
      other.exec(res => {
        console.log('res', res)
        setWinHeight(res[0].height)
       
      });
  
    }, 200);



  }

  const selectHeight = () => {
    let arr = [] as any
    let h = 0
    const query = createSelectorQuery()

    query.selectAll('.content_box').boundingClientRect()
    query.exec((res) => {
      console.log('res', res)
      res[0].forEach(item => {
        h += item.height
        arr.push(h)
      })
      //获取每一块儿content_box的高度值存储起来
      console.log('arr :>> ', arr);
      setHeightArr(arr)
      //内容区滚动的高度,首次加载获取第一项
      setScrollVal(arr[navActive - 1])
    })
  }
  //右侧滚动时方法
  const onscroll = e => {
    console.log('e :>> ', e);
    //内容区域不会超出滚动就返回
    if (heightArr.length === 0) return
    //滚动的高度
    let scrollTop = e.detail.scrollTop
    // 到达底部
    if (scrollTop + winHeight + 1 >= heightArr[heightArr.length - 1]) {
      //到达底部要把锚点id清除，否则锚点id选中不到第一项item1，因为item1此时已经变成了默认值，无法通过锚点跳转
      setSelectId('')
    }
    // 向下滚动，如果向下滚动的值大于了存储的distance值,distance默认为0，每次滚动都会把滚动值存储为distance
    if (scrollTop >= distance) {
      if (navActive + 1 < heightArr.length && scrollTop >= heightArr[navActive]) {
        //对应的左侧菜单栏的选中项进行加1
        setNavActive(navActive + 1)
      }
      //向上滚动
    } else {
      if (navActive - 1 >= 0 && scrollTop < heightArr[navActive - 1]) {
        //对应的左侧菜单栏的选中项进行减1
        setNavActive(navActive - 1)
      }
    }
    //存储了滚动的值
    setDistance(scrollTop)
  }

  const contentClick = (data) => {

  }

  return (
    <View className='container'>
      <View className='tool_bar' id='menu_tool_bar'>
        <View className='address_picker'>
          <View className='address'>昆明顺城购物中心店</View>
          <View className='desc'>距离您27m</View>
        </View>
        <View className='in_out'>
          <View className='in_out_item in_out_item_active'>自取</View>
          <View className='in_out_item'>外卖</View>
        </View>
      </View>
      <View className='category' id="category">
        <View className='nav'>
          {/* 这个是taro的scrollview的写法 */}
          <ScrollView scrollY
            // style={{ height: winHeight + 'px' }}
          >
            {
              serviceList.map((item, index) => {
                return (
                  <View
                    key='item'
                    className={`nav_title ${index === navActive ? 'nav_active' : ''}`}
                    onClick={() => navClick(index)}
                  >
                    {item.name}
                  </View>
                )
              })
            }
          </ScrollView>
        </View>

        {
          serviceList.length > 0 ? (
            <View className='content'>
              <ScrollView
                className='content_scroll'
        
                scrollY
                scrollWithAnimation
                // 此处对应的锚点就是左侧菜单栏选中时，拼接的锚点id
                scrollIntoView={selectId}
                enhanced
                bounces={false}
                onScroll={e => onscroll(e)}
                scrollTop={scrollVal}
              >

                {serviceList?.map((item, index) => {
                  return (
                    <View key='item' id={'item' + index} className='content_box'>
                      <View className='content_title'>{item.name}</View>
                      <View className='content_center_box'>
                        {item.goods.map(it => {
                          return (<View></View>
                            // <View key='it' className='content_center' onClick={() => contentClick(it)}>
                            //   <View className='content_doctor'>
                            //     {it.type === 'all' ? (
                            //       <View className='doctor_name' style='font-weight: 500;'>
                            //         {it.name}
                            //       </View>
                            //     ) : (
                            //       <View className='doctor_name'> {it.name}</View>
                            //     )}
                            //     <View className='doctor_level'>{it.level}</View>
                            //   </View>
                            //   <View className='iconfont iconmy_btn_arrow_black_big2x'></View>
                            // </View>
                            // <InLineGoods key='it' />
                          )
                        })}
                      </View>
                    </View>
                  )
                })}
                {serviceList.length > 0 && <View className='content_footer'>已经到底部啦</View>}
              </ScrollView>
            </View>
          ) : null
        }

      </View>



      
    </View>

  )
}

export default Menu