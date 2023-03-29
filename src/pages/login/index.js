import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionLogin } from '../../redux'

import {
    LoginWrapper,
    LoginBox,
    Input,
    LoginButton
} from './style'

class Login extends PureComponent {
    render() {
        const { loginState, login } = this.props
        // 用以判断是否登录成功，登录成功后跳转到根页面。
        if (!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                       
                        <Input placeholder='账号' ref={(input) => { this.account = input }}></Input>
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }}></Input>
                        <LoginButton onClick={() => login(this.account, this.password)}>登录</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

export default connect((state) => ({
    loginState: state.getIn(['login', 'login'])
}),
    (dispatch) => ({
        login(accountElem, passwordElem) {
            dispatch(actionLogin.login(accountElem, passwordElem))
        }
    })
)(Login)