import styled, { css, keyframes } from 'styled-components';
import headerPic from '../../static/img/header_bg.png';
import logo from '../../static/img/logo.png';
import itemPic from '../../static/img/focusItem.png';
import itemClickPic from '../../static/img/clickItem.png';

//头部固定元素
export const Fixed=styled.div`
    position: fixed;
    width:102%;
    height: 60px;
    z-index: 100;
    transition: background 0.5s ease-in-out;
    // box-shadow: 0 5px 10px 0px #0586a7;
    margin: 0 0 0 -2%;
    
    &.black{
        background: rgba(0,0,0,.75);
        transition: background 0.5s ease-in-out;
    }
`;

//头部包裹元素
export const HeaderWrapper =styled.div`
    background:url(${headerPic}) no-repeat;
    background-size: 100% 100%;
    top: 0;
    height: 55px;
    width:100%;
    position:relative;
    margin: 0 0 1% 0;
`;

export const Title=styled.div`
    position: fixed;
    background:url(${logo}) no-repeat top;
    background-size:10%;
    width: inherit; // 继承父元素宽度
    text-align: center;
    height:70px;
/*    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    margin-left: -101px;*/
    font-size: 45px;
    color: #7efafc;
    `;
export const Item=styled.div`
    /*背景*/
    background:url(${itemPic}) no-repeat;
    background-size: contain;
    /*定位*/
    float:right;   
    position: relative;
    width: 80px;
    height: 28px;
    bottom: 9px;
    /*内部设置*/
    color: #f4f7f7;
    text-align: center;
    font-size: 12px;
    line-height:20px;
    margin-left: 1px;
    cursor:pointer;
    transition: bottom 0.2s ease-in;
    &:hover {
        bottom: 11px;
        background:url(${itemClickPic}) no-repeat;
        background-size:contain;
        transition: all 0.2s ease-in;
    }
    &.focused{
        background:url(${itemClickPic}) no-repeat;
        background-size:contain;
        bottom: 11px;
        // transition: background 0.3s ease-in;
    }
    `;

export const ItemWrapper=styled.div`
    position: fixed;
    // margin-left: 866px;
    margin-top: 35px;
    width: inherit;
    text-align:right;
    transition:display 0.5s ease-in;
    
    &.fold{
        display:none;
    }
    
    &.unfold{
        width:102%;
        margin-top: 72px;
        display:block;
        ${Item}{
            line-height: 25px;
            background:#2c3881;
            float:right;   
            position: relative;
            width: 100%;
            height: 28px;
            bottom: 9px;
            /*内部设置*/
            color: #f4f7f7;
            text-align: center;
            font-size: 16px;
            line-height:20px;
            margin-left: 1px;
            cursor:pointer;
            transition: bottom 0.2s ease-in;
            &:hover {
                background:#292962;
                transition: all 0.2s ease-in;
            }
            &.focused{
                background:#5d5dac;
                // transition: background 0.3s ease-in;
            }
        }
    }
`;

export const MySpan=styled.div`
    position: fixed;
    margin-top: 35px;
    width: inherit;
    text-align: right;
    cursor:pointer;
    
    &.iconfont{
        font-size: 25px;
        color: aqua;
    }
`;


