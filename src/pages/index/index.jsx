import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import Menu from '../../components/menu/menu'
import TopicList from '../../components/topiclist/topiclist'

import './index.scss'

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    },
  })
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  sayhello() {
    console.log('hello')
  }
  render() {
    return (
      <View className="index">
        <Menu />
        <TopicList></TopicList>
        <AtButton>按钮文案</AtButton>
        <AtButton type="primary">按钮文案</AtButton>
        <AtButton loading type="secondary" onClick={this.sayhello}>
          按钮文案
        </AtButton>
      </View>
    )
  }
}

export default Index
