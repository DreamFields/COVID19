import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';


export const changeTab = (index) => ({
    type:actionTypes.CHANGE_TAB,
    index:index
});

export const changeTop = (isShow) => ({
    type:actionTypes.CHANGE_TOP,
    isShow
});

export const reSize = (width,height) => ({
    type:actionTypes.CHANGE_SIZE,
    width,
    height
});

export const changeFold=(isFold)=> ({
    type:actionTypes.CHANGE_FOLD,
    isFold
});
