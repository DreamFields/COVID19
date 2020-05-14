import {combineReducers} from 'redux-immutable'; // 使用第三方库redux-immutable

import {reducer as headerReducer} from '../common/header/store';
import {reducer as HomeReducer} from '../pages/more/store';
import {reducer as ServiceReducer} from '../pages/service/store';
// 或者 import HomeReducer from '../pages/home/store/reducer';


const reducer= combineReducers({
    header:headerReducer,
    home:HomeReducer,
    service:ServiceReducer
});

export default reducer;
