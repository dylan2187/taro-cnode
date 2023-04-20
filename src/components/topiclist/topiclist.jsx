import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import moduleName from '../../actions/topiclist'
import getTopicList from '../../actions/topiclist'

@connect(
  function (store) {
    return { ...store.topiclist, currentCata: store.menu.currentCata }
  },
  function (dispatch) {
    return {
      getList(params) {
        dispatch(getTopicList(params))
      },
    }
  }
)
class TopicList extends Component {
  componentDidMount() {
    console.log('hello')
    let { page, limit, currentCata } = this.props
    let params = { page: page, limit: limit, tab: currentCata.key }
    console.log('this.getList', this.props.getList)
    this.props.getList && this.props.getList(params)
  }

  render() {
    return <View>TopicList</View>
  }
}
export default TopicList
