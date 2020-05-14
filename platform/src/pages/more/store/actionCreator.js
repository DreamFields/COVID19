import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS,List} from 'immutable';

const initList=(list)=>({
    type:actionTypes.INIT_LIST,
    list:fromJS(list) // 注意将类型转换为immutable，否则在reducer中使用set函数修改list会出错
});

export const changeChecked = (index) => ({
    type:actionTypes.CHANGE_CHECKED,
    index
});

export const changeInput=(value)=>({
    type:actionTypes.CHANGE_INPUT_VALUE,
    value
});

export const reRender=()=>({
    type:actionTypes.RERENDER
});

export const testIt=()=>({
    type:'test'
});



export const handleSearch=(checklist,inputValue)=>{
    return (dispatch)=>{
        axios.get('/api/handleSearch.json',{
            params:{
                checklist:checklist.toJS(),
                inputValue
            }
        }).then((res)=>{
            const data=res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
};
export const getHotEvent=()=>{
    return (dispatch)=>{
        axios.get('/api/hotEvent.json').then((res)=>{
            const list=res.data.data.event_list; // 得到热点列表
            dispatch(initList(list));
            // console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }
};
