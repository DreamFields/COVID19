import styled,{createGlobalStyle,keyframes} from 'styled-components'; //用于生成处理全局样式
import bgPic from './static/img/bg.png';


const globalCss=keyframes`
        0%{
            opacity:0;
        }
        50%{
            opacity:0.5;
        }
        100%{
            opacity:1;
        }
`;

//此段代码使得各个浏览器可以相同展示
export const GlobalStyle=createGlobalStyle`
    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      background:url(${bgPic});
      background-size:100%;
      background-attachment:fixed; //背景图片固定，不随滚动条滚动
      
       @keyframes scaling {
            0%{
                background-size:100%;
            }
            50%{
                background-size:150%;
            }
            100%{
                background-size:100%;
            }
       }    
       background-position: top;
       -webkit-animation:scaling 10s ease-in-out infinite;
       
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  html{
    // width:1263.33px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:0;
    height:100%;
  }
  body{
    top:0;
    left:0;
    right:0;
    bottom:0;
    
    // 这一行保证了网页在任何分辨率下，都会居中。
    margin:auto;
    
    //这二行规定了网页的最小和最大宽度。注意，IE6不支持这二行，即它们在IE6中是无效的。
    min-width: 780px;
    max-width: 1260px;
    width:expression(document.body.clientWidth < 782? "780px" : document.body.clientWidth > 1262? "1260px" : "auto");
  }
       
      //全局类名，显示组件
      .show{
            display:block;
      }
      
    //全局渐入动画
    /*enter是入场前的刹那（点击按钮），appear指页面第一次加载前的一刹那（自动）*/
    .fadein-enter, .fadein-appear {
        opacity: 0;
    }
    /*enter-active指入场的第二个瞬间到入场结束之前的过程，appear-active则是页面第一次加载自动执行*/
      .fadein-enter-active, .fadein-appear-active {
          opacity: 1;
          transition: opacity 2s ease-in;
      }
    /*入场动画执行完毕后，用于保持状态*/
      .fadein-enter-done {
          opacity: 1;
          /*color: red; 也可以用js来实现,即onEntered钩子*/
      }

`;

export const MyFragment=styled.div`
    height:70px;
`;
