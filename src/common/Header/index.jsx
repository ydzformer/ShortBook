import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { actionHeaders, actionLogin } from '../../redux'
// import { searchFocus, searchBlur } from '../../redux/actions/Header'等价于下面的形式

import {
    // Wrapper,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button
} from './style'

// 又改成了类式组件
class Header extends Component {


    getListArea = () => {

        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        // list是immutable类型的没有list[i]的书写形式
        const newList = list.toJS()
        const pageList = []
        if (newList.length > 0) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}> {newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                < SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>
                            {/* 旋转按钮 */}
                            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo >
            )
        } else {
            return null
        }
    }

    render() {
        const { focused, list, login, handleInputFocus, handleInputBlur, logout } = this.props

        return (
            // 头部展示区
            // <Wrapper>
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                {/* 导航区 */}
                <Nav>
                    <NavItem className='left active' >首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? <NavItem onClick={logout} className='right'>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    {/* 2.搜索框架构 */}
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            // 时间
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                onFocus={() => { handleInputFocus(list) }}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</span>
                        {/* 这里是搜索框下拉菜单 */}
                        {this.getListArea()}
                    </SearchWrapper >
                    {/* 3. 其余展示区 */}
                    <Addition>
                        <Link to='/write'>
                            <Button className='writing'>
                                <span className="iconfont">&#xe6eb;</span>写文章
                            </Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
            // </Wrapper>

        )
    }
}

export default connect(
    // 由于我们将focused变成了immutable对象，所以他的获取方式应该用get。
    state => ({
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }),
    // 方式一
    (dispatch) => {
        return {
            // 如果是分发多个actions的话，简写不了最下面的形式。
            handleInputFocus: (list) => {
                if (list.size === 0) {
                    // 获取list列表的内容
                    dispatch(actionHeaders.getList());
                }
                // 获得焦点
                dispatch(actionHeaders.searchFocus());
            }
            ,
            handleInputBlur() {
                dispatch(actionHeaders.searchBlur())
            },
            handleMouseEnter() {
                dispatch(actionHeaders.mouseEnter())
            },
            handleMouseLeave() {
                dispatch(actionHeaders.mouseLeave())
            },
            handleChangePage(page, totalPage, spin) {
                let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')

                if (originAngle) {
                    originAngle = parseInt(originAngle, 10)
                } else {
                    originAngle = 0
                }
                spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
                console.log(originAngle);
                if (originAngle === 1080) {
                    originAngle = 0
                }
                // console.log(spin.style.transform);
                if (page < totalPage) {
                    dispatch(actionHeaders.changePage(page + 1))
                } else {
                    dispatch(actionHeaders.changePage(1))
                }
                // dispatch(actionHeaders.changePage())
            },
            logout() {
                dispatch(actionLogin.logout())
            },
        }
    }
    /*方式二：简写成对象的形式。 
    {
        handleInputFocus: actionHeaders.searchFocus, actionHeaders.getList,
        handleInputBlur: actionHeaders.searchBlur
    } */
)(Header)