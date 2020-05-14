import React, {PureComponent} from 'react';
import {EChartsItem, EChartsWrapper} from '../style';
import {actionCreators} from "../store";
import {connect} from 'react-redux';
//引入eCharts
import ReactECharts from 'echarts-for-react';
//引入主题
import eChartTheme from '../../../myeCharts/walden';
// 引入 ECharts 主模块
import eCharts from 'echarts/lib/echarts'
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
                        option={EChartsCom.getOption_number()}
                        notMerge={false}
                        lazyUpdate={true}/>
                </EChartsItem>

                <EChartsItem>
                    <ReactECharts option={EChartsCom.getOption_words()} theme="myTheme" notMerge={true} lazyUpdate={true}/>
                </EChartsItem>

                <EChartsItem>
                    <ReactECharts option={EChartsCom.getOption_object()} theme="myTheme" notMerge={true} lazyUpdate={true}/>
                </EChartsItem>
            </EChartsWrapper>
        )
    }

    //渲染主题
    componentWillMount(){
        eCharts.registerTheme('myTheme',eChartTheme);
    }

    static getOption_number(){
        return {
            title: {
                text: '谣言量',
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

    static getOption_words(){
        return {
            title: {
                text: '谣言高频词',
                textStyle:{
                    fontWeight:'lighter'
                }
            },
            //工具栏
            toolbox:{
                show:true,
                orient : 'horizontal',
                feature: {
                    saveAsImage: {}
                }
            },
            legend:{
                show:true,
                top:'13%'
            },
            tooltip: {
                show:true,
                trigger: 'axis'
            },
            series: [
                {
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 255),
                                    Math.round(Math.random() * 255),
                                    Math.round(Math.random() * 255)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Sam S Club',
                            value: 10000,
                        },{
                            name: 'Club',
                            value: 10000,
                        },{
                            name: 'S Club',
                            value: 10000,
                        },{
                            name: 'Sam',
                            value: 10000,
                        }, {
                            name: 'Macys',
                            value: 6181
                        }, {
                            name: 'Nye',
                            value: 4386
                        }, {
                            name: 'Ope',
                            value: 4386
                        }, {
                            name: 'A',
                            value: 4386
                        }, {
                            name: 'My',
                            value: 4386
                        }, {
                            name: 'World',
                            value: 4055
                        }, {
                            name: 'Charter',
                            value: 2467
                        }, {
                            name: 'Chick',
                            value: 2244
                        }, {
                            name: 'Planet',
                            value: 1898
                        }, {
                            name: 'Pitch Perfect',
                            value: 1484
                        }, {
                            name: 'Express',
                            value: 1112
                        }, {
                            name: 'Home',
                            value: 965
                        }, {
                            name: 'Johnny Depp',
                            value: 847
                        }, {
                            name: 'Lena',
                            value: 582
                        }, {
                            name: 'Lewis',
                            value: 555
                        }, {
                            name: 'KXAN',
                            value: 550
                        }, {
                            name: 'Ellen',
                            value: 462
                        }, {
                            name: 'Farrah',
                            value: 366
                        }, {
                            name: 'Rita',
                            value: 360
                        }, {
                            name: 'Serena',
                            value: 282
                        }, {
                            name: 'NCAA',
                            value: 273
                        }, {
                            name: 'Point',
                            value: 273
                        }, {
                            name: 'Point',
                            value: 265
                        }]
                }
            ]
        };
    }

    static getOption_object(){
        return {
            title: {
                text: '提及主体',
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
            yAxis: {
                data: [
                    '医院',
                    '口罩',
                    '微信群',
                    '车辆',
                    '湖北',
                    '小区',
                    '物资',
                    '高速',
                    '红十字会',
                    '政府',
                    '疫苗',
                    '全球',
                ]
            },
            xAxis: {
                type: 'value'
            },
            series: [
                {
                    type: 'bar',
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
    }
};


const mapDispatch = (dispatch)=>{
    return{
    }
};
export default connect(mapState,mapDispatch)(EChartsCom);
