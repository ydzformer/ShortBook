import { fromJS } from 'immutable'
import { constants } from '..'
// import { constants } from '..'
// 初始化状态--在这里进行ininState，就相当于把状态交给state去管理了。
// 2.将JS对象变成immutable对象,
const initState = fromJS({
    title: '',
    content: '',
})

// reducer纯函数
export default function detailReducer(preState = initState, action) {
    const { type } = action
    switch (type) {
        case constants.CHANGE_DETAIL:
            return preState.merge({
                title: action.title,
                content: action.content,
            })
        default:
            return preState
    }
} 