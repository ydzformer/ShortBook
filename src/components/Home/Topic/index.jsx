import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem,
  // MoreItem,
} from '../../../pages/home/style'

class Topic extends PureComponent {

  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {/* 这里面的应该都是链接，是不是应该用路由来写。 */}
        {
          list.map((topicItem) => {
            return (
              <TopicItem key={topicItem.get('id')}>
                <img className='topic-pic'
                  src={topicItem.get('imgUrl')}
                  alt="" />
                {topicItem.get('title')}
              </TopicItem>
            )
          })
        }
        {/* <MoreItem>更多热门专题</MoreItem> */}
      </TopicWrapper>
    )
  }
}

export default connect(
  (state) => ({
    list: state.getIn(['home', 'topicList'])
  }), null)(Topic)