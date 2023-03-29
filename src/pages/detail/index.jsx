import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionDetails } from '../../redux'
import { Content, DetailWrapper, Header } from './style'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

}

export default connect((state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
}),
  (dispatch) => ({
    getDetail(id) {
      dispatch(actionDetails.getDetail(id))
    }
  })
)(withRouter(Detail))