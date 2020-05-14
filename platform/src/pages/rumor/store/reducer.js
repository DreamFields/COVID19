import * as actionTypes from './actionTypes';

//运用第三方库immutable使js对象变为immutable对象，防止state被意外改变
import {fromJS,List} from 'immutable';

const defaultState=fromJS({

});

export default (state=defaultState,action)=>{
    return state;
}
