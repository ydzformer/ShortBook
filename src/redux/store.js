import { legacy_createStore as createStore, compose } from 'redux'
// redux-immutable里面也有combineReducers方法 
import { combineReducers } from 'redux-immutable'
// 允许在react中进行执行异步操作，在创建store的时候使用。
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import headerReducer from './reducers/Header'
import homeReducer from './reducers/Home'
import detailReducer from './reducers/Detail';
import loginReducer from './reducers/login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 总的reducers在这里
const allReducers = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))