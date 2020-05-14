import React, {PureComponent} from 'react';
import {EChartsItem, EChartsWrapper} from '../style';
import {actionCreators} from "../store";
import {connect} from 'react-redux';
//引入eCharts
import ReactECharts from 'echarts-for-react';
//引入主题
import eChartTheme from '../../../myeCharts/walden';
// 引入 ECharts 主模块
import eCharts from 'echarts/lib/echarts';
// 引入饼图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
//引入词云组件:https://github.com/ecomfe/echarts-wordcloud
import 'echarts-wordcloud';

class EChartsCom extends PureComponent {

    render() {
        return (
            <EChartsWrapper>
                {/*时间与热度*/}
                <EChartsItem>
                    <ReactECharts
                        theme="myTheme"
                        option={EChartsCom.getOption()}
                        notMerge={false}
                        id={'1'}
                        lazyUpdate={true}/>
                </EChartsItem>
            </EChartsWrapper>
        )
    }

    //渲染主题
    componentWillMount(){
        eCharts.registerTheme('myTheme',eChartTheme);
    }

    static getOption(){
        return {
            title: {
                text: '热度趋势',
                textAlign:'auto',
                textStyle:{
                    fontWeight:'lighter'
                }
            },
            //提示框组件
            tooltip: {
                show:true,
                trigger: 'axis'
            },
            // 图例组件
            legend:{
                show:true,
                top:'13%'
            },
            //工具栏
            toolbox:{
                show:true,
                orient : 'horizontal',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                data: [
                    '2020/4/12',
                    '2020/4/13',
                    '2020/4/14',
                    '2020/4/15',
                    '2020/4/16',
                    '2020/4/17',
                    '2020/4/18',
                    '2020/4/19',
                    '2020/4/20',
                    '2020/4/21',
                    '2020/4/22',
                    '2020/4/23',
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800,
                        3000,
                        2000,
                        1200,
                        800,
                        1500
                    ]
                }
            ]
        };
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
export default connect(mapState,mapDispatch)(EChartsCom);
