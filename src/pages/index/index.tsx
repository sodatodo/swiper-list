import { Component, useState } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

const Index = () => {
  const styleA = {
    width: '100%',
    height: '500px',
    backgroundColor: 'pink'
  }
  const styleB = {
    width: '100%',
    height: '500px',
    backgroundColor: 'cyan'
  }
  const [index, setIndex] = useState(1)
  const handleChange = (value) => {
    setIndex(value.detail.current)
  }
  return (
    <View>
      <View style={{ height: '500rpx', width: '100%', backgroundColor: 'blue'}}></View>
      <Swiper
        style={{ height: `${(index + 1) * 500}px`, width: '100%' }}
        onChange={handleChange}
      >
      <SwiperItem style={{ width: '50%' }}>
        <View style={styleA}>1</View>
      </SwiperItem>
      <SwiperItem style={{ width: '50%' }}>
        <View style={styleB}>1</View>
        <View style={styleA}>2</View>
      </SwiperItem>
    </Swiper>
    </View>
  )
}

export default Index