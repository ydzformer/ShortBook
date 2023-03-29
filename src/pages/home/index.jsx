import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

import List from '../../components/Home/List'
import Recommend from '../../components/Home/Recommend'
import Topic from '../../components/Home/Topic/index'
import Writer from '../../components/Home/Writer'
import { actionHomes } from '../../redux'

// 一.UI组件编写
class Home extends PureComponent {

  handleScroptTop() {
    window.scrollTo(0, 0)
  }

  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        {/* 左半部分 */}
        <HomeLeft>
          <img className='banner_img' src="https://cdn.jsdelivr.net/gh/ydzformer/jianshu@main/pic/jianshuHome.png" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        {/* 右半部分 */}
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? <BackTop onClick={this.handleScroptTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  // 绑定事件
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollToShow)
  }
  // 在组件挂载完毕后显示页面的数据。
  componentDidMount() {
    // 触发动作
    this.props.changeHomeData()
    // 在组件挂载完以后，增加绑定事件
    this.bindEvents()
  }
  // 组件将要卸载的时候需要将事件进行解绑
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToShow)
  }
}

// 二.容器组件编写
export default connect(

  (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
  }),

  // 传递给UI组件操作状态的方法
  (dispatch) =>
  ({
    changeHomeData() {
      dispatch(actionHomes.getHomeInfo())
    },
    changeScrollToShow() {
      // document.documentElement.scrollTop 可以获得当前的页面距离
      // console.log(document.documentElement.scrollTop);

      if (document.documentElement.scrollTop > 150) {
        dispatch(actionHomes.toggleTopShow(true))
      } else {
        dispatch(actionHomes.toggleTopShow(false))
      }
    }
  })
)(Home)