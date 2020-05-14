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
                <EChartsItem>
                    <ReactECharts option={EChartsCom.getOption_scores()} theme="myTheme" notMerge={true} lazyUpdate={true}/>
                </EChartsItem>
                <EChartsItem>
                    <ReactECharts option={EChartsCom.getOption_words()} theme="myTheme" notMerge={true} lazyUpdate={true}/>
                </EChartsItem>
                <EChartsItem>
                    <ReactECharts option={EChartsCom.getOption_positive_words()} theme="myTheme" notMerge={true} lazyUpdate={true}/>
                </EChartsItem>
                <EChartsItem>
                    <ReactECharts option={EChartsCom.getOption_negative_words()} theme="myTheme" notMerge={true} lazyUpdate={true}/>
                </EChartsItem>
            </EChartsWrapper>
        )
    }

    //渲染主题
    componentWillMount(){
        eCharts.registerTheme('myTheme',eChartTheme);
    }
    static getOption_words(){
        return {
            title: {
                text: '热门话题词',
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

    static getOption_scores(){
        return {
            title: {
                text: '情感属性',
                textStyle:{
                    fontWeight:'lighter'
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
            //工具栏
            toolbox:{
                show:true,
                orient : 'horizontal',
                feature: {
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '情感倾向',
                    type: 'pie',
                    roseType: 'angle',
                    radius:[0,'65%'],
                    visualMap: {
                        // 不显示 visualMap 组件，只用于明暗度的映射
                        show: false,
                        // 映射的最小值为 80
                        min: 80,
                        // 映射的最大值为 600
                        max: 600,
                        inRange: {
                            // 明暗度的范围是 0 到 1
                            colorLightness: [0, 1]
                        }
                    },
                    data: [
                        {value:235, name:'积极'},
                        {value:274, name:'消极'},
                        {value:174, name:'中性'},
                    ]
                }
            ]
        };
    }

    static getOption_positive_words(){
        return {
            title: {
                text: '正向高频词',
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
    static getOption_negative_words(){
        return {
            title: {
                text: '负向高频词',
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
