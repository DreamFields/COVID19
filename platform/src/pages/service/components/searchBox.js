import React, { PureComponent } from 'react';
import {SearchControl,SearchBtn, SearchInput, SearchWrapper} from '../style';
import {actionCreators} from "../store";
import {connect} from 'react-redux';
class SearchBox extends PureComponent {

    render() {
        return (
            <SearchControl
                className={this.props.isShowResult?'result':''}
            >
            <SearchWrapper className={this.props.isShowResult?'result':''}>
                <SearchInput
                    className={this.props.isShowResult?'result':''}
                    onChange={this.props.handleInputChange}
                    value={this.props.inputValue}
                ></SearchInput>
                <SearchBtn
                    className={this.props.isShowResult?'result':''}
                    onClick={()=>this.props.handleSearch(this.props.checklist,this.props.inputValue)}
                >
                    点击搜索
                </SearchBtn>
            </SearchWrapper>
            </SearchControl>
        )
    }
}

const mapState = (state /*, ownProps*/) => {
    return {
        inputValue:state.getIn(['service','inputValue']),
        checklist: state.getIn(['service','checklist']),
        isShowResult:state.getIn(['service','isShowResult'])
    }
};


const mapDispatch = (dispatch)=>{
    return{
        //控制输入框显示
        handleInputChange(event){
            dispatch(actionCreators.changeInput(event.target.value));
        },
        //控制搜索内容
        handleSearch(checklist,inputValue){
            //健壮性未实现：输入非法字符，字符串长度，信息来源未选择等等

            if(inputValue) {//输入框不为空再提交请求
                dispatch(actionCreators.handleSearch(checklist, inputValue));

                //点击搜索后，页面重新渲染，使isShowResult为true
                dispatch(actionCreators.reRender());
            }
            else{
                alert('请输入输入话题、热点事件');
            }
        }
    }
};
export default connect(mapState,mapDispatch)(SearchBox);
