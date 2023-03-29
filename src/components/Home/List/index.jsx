import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionHomes } from '../../../redux'
import { ListItem, ListInfo, LodeMore } from '../../../pages/home/style'
import { Link } from 'react-router-dom'


class List extends PureComponent {

  render() {
    const { list, getMoreList, page } = this.props

    // observe.observe(this.imgRes)
    return (
      <div>
        {/* 动态展示页面数据 */}
        <div>
          {
            list.map((articleList, index) => {
              return (
                <Link key={index} to={"/detail/" + articleList.get('id')} >
                  <ListItem>
                    {/* <img className='pic' src={articleList.get('imgUrl')} alt="" /> */}
                    <img className='pic' src={articleList.get('imgUrl')} alt=""  />
                    <ListInfo>
                      <h3 className='title'>{articleList.get('title')}</h3>
                      <p className='desc'>{articleList.get('desc')}</p>
                    </ListInfo>
                  </ListItem>
                </Link>
              )
            })
          }
        </div>
        {/* 加载更多文章 */}
        <LodeMore onClick={() => getMoreList(page)}>阅读更多</LodeMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'artilcePages'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionHomes.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)
