import { createSelector } from "reselect"

export const getHeaderDetail = createSelector(
    state => state.getIn(['header', 'focused']),
    state => state.getIn(['header', 'mouseIn']),
    state => state.getIn(['header', 'list']),
    state => state.getIn(['header', 'page']),
    state => state.getIn(['header', 'totalPage']),
    state => state.getIn(['login', 'login']),
    state => state.getIn(['header', 'hasError']),
    // 这里是返回给redux的状态数据。
    (focused, mouseIn, list, page, totalPage) => {
        return {
            focused, mouseIn, list, page, totalPage
        }
    }
)