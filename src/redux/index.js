// redux的入口文件，注意为了方便引入的时候简写路径
import * as actionHeaders from './actions/Header'
import * as actionHomes from './actions/Home'
import * as actionDetails from './actions/Detail'
import * as actionLogin from './actions/login'
// 引入全体常量
import * as constants from './constant'

export { actionHomes, actionHeaders, actionDetails, actionLogin, constants }