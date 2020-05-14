import * as actionTypes from './actionTypes';

//运用第三方库immutable使js对象变为immutable对象，防止state被意外改变
import {fromJS,List} from 'immutable';

const defaultState=fromJS({
    tab:[true,false,false],
    isChangeTop:false,
    deskWidth:document.body.clientWidth,
    deskHeight: document.body.clientHeight,
    isFold:true //头部元素是否折叠
});

export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.CHANGE_TAB:
            let oldTab=List.of(false,false,false,false);
            return state.set('tab',oldTab.set(action.index,true));
        case actionTypes.CHANGE_TOP:
            return state.set('isChangeTop',action.isShow);
        case actionTypes.CHANGE_SIZE:
            return state.merge({
                deskWidth:action.width,
                deskHeight:action.height
            });
        case actionTypes.CHANGE_FOLD:
            return state.set('isFold',action.isFold);
    }

     return state;
}
