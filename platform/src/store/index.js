//Store 的创建
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//applyMiddleware函数：用于Redux中间件的使用，参数是中间件名，也可以用数组形式使用多个中间件
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;
