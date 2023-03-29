import { constants } from '../index'
// 1.fromJS可以帮助我们把JS对象变成immutable对象
import { fromJS } from 'immutable'

// 初始化状态
// 2.将JS对象变成immutable对象
const initState = fromJS({
    focused: false,
    mouseIn: false,
    // 这个数组是专门来存储搜索框下拉菜单历史数据的。
    list: [],
    // 显示页数
    page: 1,
    totalPage: 1,
    hasError:false
})

// reducer纯函数
export default function homeReducer(preState = initState, action) {
    const { type } = action
    switch (type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象。
            return preState.set('focused', true)
        case constants.SEARCH_BLUR:
            return preState.set('focused', false)
        case constants.CHANGE_LIST:
            // 这里需要注意，preState中的list是immutable的特殊数据，而action.data是后台传过来的普通数组格式，这就需要我们在前面进行转换
            return preState.set('list', action.data).set('totalPage', action.totalPage)
        case constants.MOUSE_ENTER:
            return preState.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return preState.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return preState.set('page', action.page)
        default:
            return preState
    }
} 