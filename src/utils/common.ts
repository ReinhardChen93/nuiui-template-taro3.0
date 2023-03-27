import Taro from '@tarojs/taro'

Taro.getStorage({
  key: 'keywordsList'
})

// 存储搜索关键字
export const setKeywordInHistory = (keyword: string) => {
  const keywordsList: Array<string> = Taro.getStorageSync('keywordsList') || []
  console.log('keywordsList', keywordsList)
  const index = keywordsList.findIndex((item) => item === keyword)
  if (index !== -1) {
    keywordsList.splice(index, 1)
  }
  keywordsList.unshift(keyword)
  Taro.setStorage({ key: 'keywordsList', data: keywordsList })
}

// 获取搜索关键字
export const getKeywordInHistory = () : Array<string> => {
  return Taro.getStorageSync('keywordsList')
}

// 清除搜索关键字
export const clearKeywordInHistory = () => {
  Taro.removeStorageSync('keywordsList')
}