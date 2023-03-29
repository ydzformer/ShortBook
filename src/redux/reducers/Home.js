// import { constants } from '../index'
// 1.fromJS可以帮助我们把JS对象变成immutable对象
import { fromJS } from 'immutable'
import { constants } from '..'
// 初始化状态--在这里进行ininState，就相当于把状态交给state去管理了。
// 2.将JS对象变成immutable对象,
const initState = fromJS({
    // 分别用来存储页面的数据的
    topicList: [],
    articleList: [],
    recommendList: [],
    WriterList: [],
    // 页面articlePags用于方便后端基于此来分页
    artilcePages: 1,
    // 控制返回顶部按键何时显示
    showScroll: false
})

const changeHomeData = (preState, action) => {
    return preState.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        WriterList: fromJS(action.WriterList),
    })
}

const addMoreList = (preState, action) => {
    return preState.merge({
        'articleList': preState.get('articleList').concat(action.data),
        'artilcePages': action.nextPage
    })
}
// reducer纯函数
export default function homeReducer(preState = initState, action) {
    const { type } = action
    switch (type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(preState, action)
        case constants.ADD_MORE_LIST:
            return addMoreList(preState, action)
        case constants.TOGGLE_SCROLL_TOP:
            return preState.set('showScroll', action.data)
        default:
            return preState
    }
} 