import React, {PureComponent,Fragment} from 'react';
import {connect} from 'react-redux'; //将该组件与store连接
import {actionCreators} from './store'

// 引入service下的组件
import ResultTitle from '../../common/resultTitle';
import EChartsCom from './components/echartsComponent';
import TimeLine from './components/eventTimeLine';
import {ServiceWrapper,ResultWrapper} from './style';

/*使用styled-components之后引入css文件将失效*/
class Extract extends PureComponent {
    render() {
        return(
            <ServiceWrapper>
                <ResultWrapper>
                    {/*eCharts 热度趋势*/}
                    <div className={'animated slideInUp delay-0.5s'}>
                        <EChartsCom/>
                    </div>

                    {/*时间线*/}
                    <TimeLine/>
                </ResultWrapper>
            </ServiceWrapper>
        )
    }

    componentDidMount() {
        //this.props.getHotEvent();
    }
}

const mapState = (state /*, ownProps*/) => {
    return {
        //isShowResult:state.getIn(['service','isShowResult']),
        // test:state.getIn(['service','test']),
    }
};


const mapDispatch = (dispatch) => {
    return {
        //请求获取热点事件
        /*getHotEvent() {
            dispatch(actionCreators.getHotEvent());
        },*/
    }
};
export default connect(mapState, mapDispatch)(Extract);
