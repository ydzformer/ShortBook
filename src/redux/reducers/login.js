// import { constants } from '../index'
// 1.fromJS可以帮助我们把JS对象变成immutable对象
import { fromJS } from 'immutable'
import { constants } from '..'
// 初始化状态--在这里进行ininState，就相当于把状态交给state去管理了。
// 2.将JS对象变成immutable对象,
const initState = fromJS({
    login:false
})


// reducer纯函数
export default function loginReducer(preState = initState, action) {
    const { type } = action
    switch (type) {
        case constants.CHANGE_LOGIN:
            return preState.set('login',action.value)
        case constants.LOG_OUT:
            return preState.set('login',action.value)
        default:
            return preState
    }
} 