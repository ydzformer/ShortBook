import axios from "axios"
import { fromJS } from "immutable"
import { constants } from ".."

// 下面两个是加载页面数据的action
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    WriterList: result.WriterList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('./api/home.json').then((res) => {
            // 获取响应数据
            const result = res.data.data
            // 将数据通过action分发出去
            dispatch(changeHomeData(result))
        })
    }
}

// 这两个是加载增加页面文章阅读量的

const addMoreList = (list, nextPage) => ({
    type: constants.ADD_MORE_LIST,
    data: fromJS(list),
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('./api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data
            page++
            dispatch(addMoreList(result, page))
        })
    }
}

export const toggleTopShow = (showFlag) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    data: showFlag
})