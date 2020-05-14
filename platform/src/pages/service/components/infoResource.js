import React, { Component ,Fragment} from 'react';
import {InfoSource, ItemWrapper, SourceItem, SourceTitle} from '../style';
import {actionCreators} from "../store";

import {connect} from 'react-redux';
class InfoResource extends Component {

    render() {
        return (
            <Fragment>
            <InfoSource className={this.props.isShowResult?'hidden':''}>
                <SourceTitle>选择信息来源</SourceTitle>
                <ItemWrapper>
                    {
                        this.props.checklist.map((item,index)=>{
                            return (
                                <SourceItem
                                    title={item.get('checked')?'取消选择':'选择'}
                                    key={item.get('name')}
                                    id={item.get('name')}
                                    className={item.get('checked')?'checked':''}
                                    onClick={()=>this.props.changeChecked(index,window)}
                                >{item.get('name')}</SourceItem>
                            )
                        })
                    }
                </ItemWrapper>
            </InfoSource>
            </Fragment>
        )
    }


}

const mapState = (state /*, ownProps*/) => {
    return {
        checklist: state.getIn(['service','checklist']),
        isShowResult: state.getIn(['service','isShowResult'])
    }
};


const mapDispatch = (dispatch)=>{
    return{
        //控制信息来源选择
        changeChecked(index,window){
            dispatch(actionCreators.changeChecked(index));
        }
    }
};
export default connect(mapState,mapDispatch)(InfoResource);
