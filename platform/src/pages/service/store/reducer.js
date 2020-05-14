import * as actionTypes from './actionTypes';

//运用第三方库immutable使js对象变为immutable对象，防止state被意外改变
import {fromJS,List} from 'immutable';

const defaultState=fromJS({
    checklist:[
        {name:'百度',checked:true},
        {name:'知道',checked:true},
        {name:'知乎',checked:true},
        {name:'微博',checked:true},
        {name:'百科',checked:true},
        {name:'贴吧',checked:true},
    ],
    inputValue:'',
    eventList:[],
    isShowResult:false, // 是否显示搜索结果页面，控制整个页面重新渲染
    // test:false
});

export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.CHANGE_CHECKED:
            let oldChecklist=state.get('checklist'); // 源数据
            let changeIndexMap=oldChecklist.get(action.index); //得到map {name:'知道',checked:false}
            let checkedValue=changeIndexMap.get('checked'); // 得到map的真值
            return state.set('checklist',
                oldChecklist.set(action.index,
                    changeIndexMap.set('checked',!checkedValue)));
        case actionTypes.CHANGE_INPUT_VALUE:
            return state.set('inputValue',action.value);
        case actionTypes.INIT_LIST:
            return state.set('eventList',action.list);
        case actionTypes.RERENDER:
            return state.merge({
                isShowResult:true,
                inputValue:''
            });
/*        case 'test':
            let test=state.get('test');
            return state.set('test',!test);*/
    }

     return state;
}
