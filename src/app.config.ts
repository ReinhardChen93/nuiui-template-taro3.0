export default defineAppConfig({
  pages: [
    'pages/welcome/index',
    'pages/index/index',
    'pages/menu/index',
    'pages/mall/index',
    'pages/order/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    // color: '#9e9e9e',
    // selectedColor: '#000000',
    // backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        // selectedIconPath: 'assets/imgs/tabbar/clock_active.png',
        // iconPath: 'assets/imgs/tabbar/clock.png',
        text: '首页'
      },
      {
        pagePath: 'pages/menu/index',
        // selectedIconPath: 'images/tabbar_cate_on.png',
        // iconPath: 'images/tabbar_cate.png',
        // text: '点单'
      },
      {
        pagePath: 'pages/mall/index',
        // selectedIconPath: 'images/tabbar_cart_on.png',
        // iconPath: 'images/tabbar_cart.png',
        // text: '商城'
      },
      {
        pagePath: 'pages/order/index',
        // selectedIconPath: 'images/tabbar_my_on.png',
        // iconPath: 'images/tabbar_my.png',
        // text: '订单'
      },
      {
        pagePath: 'pages/my/index',
        // selectedIconPath: 'images/tabbar_my_on.png',
        // iconPath: 'images/tabbar_my.png',
        // text: '我的'
      }
    ]
  }
})
