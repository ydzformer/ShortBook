import axios from "axios"
import { constants } from ".."

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content,
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            // console.log(111);
            const result = res.data.data
            // console.log(res.data.data);
            dispatch(changeDetail(result.title, result.content))
        }).catch(() => { })
    }
}