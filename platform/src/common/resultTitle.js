import React, { PureComponent } from 'react';
import {
    ResultWrapper,
    TitleWrapper,
    Title,
    Text,
    Emotion,
    Abstract,
    AbstractBg
} from '../pages/service/style';
import {actionCreators} from "../pages/service/store";
import {connect} from 'react-redux';
class ResultTitle extends PureComponent {

    render() {
        return (
            <ResultWrapper>
            <TitleWrapper>
                <Title style={{display:'inline-block'}}>
                    <Emotion>中性</Emotion>
                    <Text className={'title'}>
                        COVID-19 疫情信息摘要汇总
                    </Text>
                </Title>
                <AbstractBg>
                <Abstract>
                    <Text className={'abstract'}>总体<br/>概要</Text>
                    <Text className={'content'}>
                        为严防新型冠状病毒感染的肺炎疫情，阻断可能的传染源和传播途径，市场监管总局、农业农村部、国家林草局决定，自本公告发布之日起至全国疫情解除期间，禁止野生动物交易活动。2月11日上午，省十三届人大常委会举行第十八次会议，审议通过《广东省人民代表大会常务委员会关于依法防控新型冠状病毒肺炎疫情切实保障人民群众生命健康安全的决定》。为严防新型冠状病毒感染的肺炎疫情，阻断可能的传染源和传播途径，市场监管总局、农业农村部、国家林草局决定，自本公告发布之日起至全国疫情解除期间，禁止野生动物交易活动。2月11日上午，省十三届人大常委会举行第十八次会议，审议通过《广东省人民代表大会常务委员会关于依法防控新型冠状病毒肺炎疫情切实保障人民群众生命健康安全的决定》。
                    </Text>
                </Abstract>
                </AbstractBg>
            </TitleWrapper>
            </ResultWrapper>
        )
    }
}

const mapState = (state /*, ownProps*/) => {
    return {
        //inputValue:state.getIn(['service','inputValue']),
        //isShowResult:state.getIn(['service','isShowResult'])
    }
};


const mapDispatch = (dispatch)=>{
    return{
        /*//控制输入框显示
        handleInputChange(event){
            dispatch(actionCreators.changeInput(event.target.value));
        },*/
        /*//控制搜索内容
        handleSearch(checklist,inputValue){
            //健壮性未实现：输入非法字符，字符串长度，信息来源未选择等等

            if(inputValue) {//输入框不为空再提交请求
                dispatch(actionCreators.handleSearch(checklist, inputValue));

                //点击搜索后，页面重新渲染，使isShowResult为true
                dispatch(actionCreators.reRender());
            }
        }*/
    }
};
export default connect(mapState,mapDispatch)(ResultTitle);
