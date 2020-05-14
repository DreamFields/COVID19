import styled, { css, keyframes } from 'styled-components';
import eChartsBg from '../../static/img/echartsBg2.png';
// import './myTransition.css';
/*
* 对于margin和padding，百分比按照父元素的宽计算，对于相对定位元素，则按照父元素的高计算。
* */

//eCharts
export const EChartsWrapper=styled.div`
    display:flex;
    margin:20px auto 20px auto;
    height:275px;
    flex-direction: row;
    flex-wrap:nowrap;
    width:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
`;
export const EChartsItem=styled.div`
    margin: 0 10px 0 10px;
    padding: 10px 0 0 10px;
    background:url(${eChartsBg}) no-repeat;
    height:100%;
    width:40%;
    background-size:100% 100%;
    flex: auto;
`;
