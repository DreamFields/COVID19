import styled, { css, keyframes } from 'styled-components';
import infoSourceBg from '../../static/img/info_source_bg.png';
import sourceUnChose from '../../static/img/unChose.png';
import sourceChose from '../../static/img/chose.png';
import searchBox from '../../static/img/searchBox.png';
import searchBtn from '../../static/img/searchButton.png';
import hotTitle from '../../static/img/hot_title.png';
import eventItem from '../../static/img/hot_item_bg.png';
import line from '../../static/img/line.png';
import resultTitle from '../../static/img/resultTitile.png';
import abstractBg from '../../static/img/abstractBg.png';
import eChartsBg from '../../static/img/echartsBg.png';
// import './myTransition.css';
/*
* 对于margin和padding，百分比按照父元素的宽计算，对于相对定位元素，则按照父元素的高计算。
* */

export const ServiceWrapper=styled.div`
    width:100%;
    margin:0 auto;
    overflow:hidden;
    // top:500px;
    // position:absolute;
`;

export const InfoSource=styled.div`
    background:url(${infoSourceBg}) no-repeat;
    background-size:100% 100%;
     min-width:460px; // 宽度下限，不能少于460px
    // display:flex;
    
    width:46%;
    height:85px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 25px auto auto auto;
    // padding:3px 0 0 15px;
    position: relative;
    
    color:#bad0e7;
    font-size:12px;
    box-sizing:border-box;

`;
export const SourceTitle=styled.div`
    line-height: 25px;
    margin-left: 3%;
    width:inherit;
    text-align:left;
`;
export const ItemWrapper=styled.div`
    width:100%;
    height:100%;
    // display:flex;
`;
export const SourceItem=styled.div`
    background:url(${sourceUnChose}) no-repeat;
    background-size: 100% 100%;
    float: left;
    height: 30%;
    width: 14%;
    line-height: 20px;
    text-align: center;
    margin: 10px 0 0 10px;
    cursor:pointer;
    color:#e2e9ed;
    transition: all 0.2s ease-in;
    
    &.checked{
        background:url(${sourceChose}) no-repeat;
        background-size: 100% 100%;
        transition: all 0.2s ease-in;
    }
`;

//控制搜索框的位置——flex布局
export const SearchControl=styled.div`
    width:inherit;
    display:flex;
    justify-content:center;
    
    //点击后搜索框靠右显示
    
   //方法一：
/*     &.result{
        text-align: right;
        display: block;
    }*/
    
    //方法二：
    &.result{
       justify-content:flex-end; 
    }
`;
export const SearchWrapper=styled.div`
    height: 42px;
    width: 63%;
    min-width:500px;
    
    overflow:hidden;
    background: url(${searchBox}) no-repeat;
    background-size: 100% 100%;
    
    margin-top:20px;
    position: relative;
    
   //方法一：
/*     &.result{
        display:inline-block; // 父元素的text-align：right
        height: 37px;
        width: 30%;
        right: 20px;
        min-width:320px;
    }*/
    
    //方法二：
    &.result{
        margin-top:10px;
        height: 37px;
        width: 30%;
        right: 20px;
        min-width:320px;
    }
    
`;
export const SearchInput=styled.input.attrs({
    placeholder:'输入话题、热点事件',
    type:'text'
})`
    background-color:transparent;
    outline:none; // 鼠标点击时无边框
    border-width: 0; // 无边框
    text-align:center; // 光标在中间
    font-size:18px;
    line-height:23px;
    color:#e2e9ed;
    position: relative;
    left: 3%;
    top: 15%;
    &::placeholder{
        transition: all 0.2s ease-out;
        color:#364363;
    }
    /*多余文字省略号显示*/
    width: 82%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:focus{
         &::placeholder{
            transition: all 0.2s ease-in;
            color:#7080b0;
        }
    }
    
    &.result{
    font-size: 15px;
    line-height: 22px;
    top: 18%;
    width: 75%;
    }
`;
export const SearchBtn=styled.div`
    min-width: 70px;
    background: rgba(65, 73, 163,0.6);
    cursor:pointer;
    width: 10%;
    height: 25px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color:#e2e9ed;
    float: right;
    margin: 8px 10px 0 0;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        color: #6de6f1;
        background: url(${searchBtn}) no-repeat;
        background-size: contain;
        transition: all 0.2s ease-in-out;
    }
    
    &.result{
        font-size: 11px;
        line-height: 21px;
        width: 20%;
        margin-top: 6px;
    }
`;

export const HotEvent=styled.div`
    margin-top:12px;
    width:100%;
    margin-bottom:20px;
    
/*    &.hidden{
        display:none;
    }*/
`;
export const HotTitle=styled.div`
    background: url(${hotTitle}) no-repeat;
    background-size: contain;
    height: 40px;
    width: 164px;
    position: relative;
    left: -82px;
    margin-left: 50%;
`;
export const EventWrapper=styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    width:80%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
`;
export const EventItem=styled.div`
    background:url(${eventItem}) no-repeat;
    background-size:100% 100%;
    flex:auto;
    height:170px;
    width: 25%;
    // min-width:300px;
    
    margin-top: 2%;
    padding: 12px;
    margin-right:20px;
`;
export const EventTitle=styled.div`
    color:#9bdef0;
    font-size: 20px;
    line-height: 25px;
    min-width:240px;
}
`;
export const Emotion=styled.div`
    float: left;
    background-color: #6148f7;
    font-size: 10px;
    line-height: 15px;
    width: 25px;
    text-align: center;
    margin-right: 5px;
    border-radius: 3px;
    margin-top: 5px;
`;
export const Line=styled.div`
    background:url(${line}) no-repeat;
    background-size: contain;
    height: 4px;
    width: 100%;
    margin: 5px 0;
`;
export const EventContent=styled.div`
    color: snow;
    font-size: 14px;
    line-height: 20px;
    height: 70%;
    
    text-indent: 2em; /*首行缩进*/
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 6; /** 显示的行数 **/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
`;

//=================搜索结果界面======================
export const ResultWrapper=styled.div`
    margin:0 2% 0 2%;
    width:96%;
`;

export const TitleWrapper=styled.div`
    width:100%;
    height:200px;
    // background:blue;
    position: relative;
`;

export const Title=styled.div`
    background:url(${resultTitle}) no-repeat;
    
    //宽度100% 高度等比例!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    background-size:100% 100%;
    width: 380px;
    height: 65px;
    
    ${Emotion}{
        line-height: 20px;
        font-size: 12px;
        width: 32px;
        color:#6fc8ee;
        border-radius: 10px;
        margin: 6% 1%;
        border: 1px solid white;
    }
    
`;


export const Text=styled.div`
    &.title{
        width: 85%;
        font-size: 25px;
        line-height: 63px;
        color: #74e8eb;
       
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    &.abstract{
        height: 70%;
        font-size: 17px;
        color: #9bd0f0;
        line-height: 29px;
        margin: 10px 20px 5px 10px;
        
        //设定“事件概要”的宽度，右边的文本自适应
        width: 20%;
        min-width: 65px;
        
        box-shadow: 1px 0px 0px 0px #4ac4bb;
        text-align: center;
        padding: 3px 0 3px 0;
        float: left;    
    }
    &.content{
        font-size: 13px;
        color: #9bd0f0;
        line-height: 19px;
        
        //设定“事件概要”的宽度，右边文本自适应
        // width: 90%;
        flex:auto;
        
        margin: 5px 10px 5px 0;
        
        text-indent: 2em;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 4; /** 显示的行数 **/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }
`;

//渲染背景图片
export const AbstractBg=styled.div`
    background:url(${abstractBg}) no-repeat;
    height: 101px;
    background-size: 8% 100%;
`;
//事件概要
export const Abstract=styled.div`
    display:flex;
    width: 100%;
    height: 85px;
    margin-top: 10px;
    border: 1px solid #8392a7;
    top: 7.5px;
    border-radius: 8px;
    left: 4px;
    position: relative;
    background: rgba(22,30,108,0.6);
`;

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
