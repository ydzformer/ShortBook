import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  RecommendWrapper,
  RecommendItem
} from '../../../pages/home/style'



class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map((ListItem) => {
            return <RecommendItem key={ListItem.get('id')} imgUrl={ListItem.get('imgUrl')} />
          })
        }
      </RecommendWrapper>
    )
  }
}

export default connect((state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
}), null)(Recommend)