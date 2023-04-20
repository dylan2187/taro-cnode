import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtNavBar } from 'taro-ui'
import { AtDrawer } from 'taro-ui'
import { showDrawer, changeCata, closeDrawer } from '../../actions/menu'

import './menu.scss'

@connect(
  function (store) {
    return { ...store.menu }
  },
  function (dispatch) {
    return {
      showMenu() {
        dispatch(showDrawer())
      },
      hideMenu() {
        dispatch(closeDrawer())
      },
      changeCata(cata) {
        dispatch(changeCata(cata))
      },
    }
  }
)
class Menu extends Component {
  showDrawer() {
    this.props.showMenu && this.props.showMenu()
  }
  closeDrawer() {
    this.props.hideMenu && this.props.hideMenu()
  }
  getItems(cataData) {
    return cataData.map((item) => {
      return item.value
    })
  }
  clickCata(index) {
    let { cataData } = this.props
    let cata = cataData[index]
    this.props.changeCata && this.props.changeCata(cata) //点击分类，触发切换分类方法
  }
  render() {
    let { showDrawer, cataData } = this.props
    let items = this.getItems(cataData)

    return (
      <View>
        <AtNavBar
          onClickRgIconSt={this.showDrawer.bind(this)}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color="#000"
          title={
            this.props.currentCata.value ? this.props.currentCata.value : ' '
          }
          leftText="返回"
          rightFirstIconType="bullet-list"
          rightSecondIconType="user"
        />
        <AtDrawer
          show={showDrawer}
          right
          mask
          onItemClick={this.clickCata.bind(this)}
          items={items}
          onClose={this.closeDrawer.bind(this)}></AtDrawer>
      </View>
    )
  }
}
export default Menu
