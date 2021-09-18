import { Component, useState } from 'react'
import { View, Text, Swiper, SwiperItem, Button } from '@tarojs/components'
import test from '../../components/nearby/nearby.wxs'
import './index.scss'

const Index = () => {
  const styleA = {
    width: '100vh',
    height: '100vh',
    backgroundColor: 'pink'
  }
  const styleB = {
    width: '100vh',
    height: '100vh',
    backgroundColor: 'cyan'
  }
  const [boxStyle, setBoxStyle] = useState('--append-height: 100vh')
  const [height, setHeight] = useState(50)
  const handleChange = (e) => {
    if (e.detail.current === 0) {
      setBoxStyle('--append-height: 100vh')
    } else {
      setBoxStyle('--append-height: 200vh')
    }
  }
  const handleChangeHeight = () => {
    setHeight(150)
  }
  test.test()
  console.log(`test`, test)
  return (
    <View>
      <View style={{ height: '500px', backgroundColor: 'blue' }} ></View>
      <Swiper
        className='box'
        style={boxStyle}
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