import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterTitle,
  RecommandWriter,
  WriterItem,
  WriterNav,
  FocusWriter
} from '../../../pages/home/style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          <span className='left'>推荐作者</span>
          <span className='right'>
            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
            换一换
          </span>
        </WriterTitle>
        {/* 声明为ul的形式 */}
        <RecommandWriter>
          {/* 这是li标签 */}
          {
            this.props.list.map((ListItem) => {
              return (
                <WriterItem key={ListItem.get('id')}>
                  <WriterNav PerUrl={ListItem.get('PerUrl')}>
                    <img className='remond_img' src={ListItem.get('imgPer')} alt='' />
                  </WriterNav>
                  <FocusWriter>
                    <i>关注</i>
                  </FocusWriter>
                  <span>{ListItem.get('name')}</span>
                  <p>写了761.9K字 · 25.5k喜欢</p>
                </WriterItem>
              )
            })
          }
        </RecommandWriter>
      </WriterWrapper>
    )
  }
}

export default connect((state) => ({
  list: state.getIn(['home', 'WriterList'])
}))(Writer)