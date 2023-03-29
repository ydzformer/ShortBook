import axios from 'axios'
import { constants } from '../index'
import { fromJS } from 'immutable'

// 不对外暴露的action写在上面
export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

// 对外暴露的action
export const searchFocus = () => ({ type: constants.SEARCH_FOCUS })
export const searchBlur = () => ({ type: constants.SEARCH_BLUR })
export const mouseEnter = () => ({ type: constants.MOUSE_ENTER })
export const mouseLeave = () => ({ type: constants.MOUSE_LEAVE })
export const changePage = (page) => ({ type: constants.CHANGE_PAGE, page })

// 下面是异步action
export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('err');
        })
    }
}