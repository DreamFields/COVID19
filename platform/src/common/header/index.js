import React,{PureComponent} from 'react';

import {
    Fixed,
    HeaderWrapper,
    Title,
    ItemWrapper,
    Item,
    MySpan
} from './style'

import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; //将该组件与store连接
import {actionCreators} from './store';

class Header extends PureComponent{

/*    constructor(props) { // 接收一个参数
        super(props); // 调用父类Component的构造函数，调用一次
        this.state = {
            deskWidth:document.body.clientWidth,
            deskHeight: document.body.clientHeight
        }
    }*/

    render(){
        // const {tab}=this.props;
        return (
            <Fixed
                className={this.props.isChangeTop||this.props.deskWidth<970?'black':''}>
            <HeaderWrapper
                style={{
                    width:this.props.deskWidth>1280?1280:this.props.deskWidth
                }}
            >
                <Title></Title>
                {/*当浏览器宽度小于970px，隐藏*/}
                {this.renderLink()}

                {/*当浏览器宽度小于970px，显示*/}
                <MySpan
                    className={'iconfont unfold'}
                    onClick={()=>this.props.changeFold(!this.props.isFold)}
                    style={{
                        display:this.props.deskWidth>970?'none':'block'
                    }}
                >&#xe605;</MySpan>

            </HeaderWrapper>
            </Fixed>
        )
    }

    componentDidMount() {
        //绑定一个滚动事件，利用redux数据流控制页面
        this.bindEvents();

        // 注册浏览器尺寸变化监听事件， 刷新桌面尺寸，利用组件本身的state控制页面
        this.bindSize();
    }

    bindSize(){
        window.addEventListener('resize', this.props.handleSize);
    }

    bindEvents(){
        //监听window的屏幕滚动事件，如果有滚动，调用第二个参数中的函数
        window.addEventListener('scroll',this.props.changeTopShow);
    }

    //当“返回顶部”按钮组件被销毁，需要对window监听事件解绑
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeTopShow);

        // 移除监听事件
        window.removeEventListener('resize', this.props.handleSize);
    }

    //渲染link
    renderLink(){
        if(this.props.deskWidth>970){
            return(
                <ItemWrapper>
                    <Link to={'/rumor'}>
                        <Item
                            className={this.props.tab.get(2)?'focused':''}
                            id={'2'}
                            onClick={this.props.changeTab}
                        >谣言
                        </Item>
                    </Link>
                    <Link to={'/emotion'}>
                        <Item
                            className={this.props.tab.get(1)?'focused':''}
                            id={'1'}
                            onClick={this.props.changeTab}
                        >情感
                        </Item>
                    </Link>
                    <Link to={'/'}>
                        <Item
                            className={this.props.tab.get(0)?'focused':''}
                            id={'0'}
                            onClick={this.props.changeTab}
                        >摘要
                        </Item>
                    </Link>
                </ItemWrapper>
            )
        }
        else{
            return(
                <ItemWrapper
                    className={this.props.isFold?'fold':'unfold'}
                >
                    <Link to={'/'}>
                        <Item
                            className={this.props.tab.get(0)?'focused':''}
                            id={'0'}
                            onClick={this.props.changeTab}
                        >摘要
                        </Item>
                    </Link>
                    <Link to={'/more'}>
                        <Item
                            className={this.props.tab.get(1)?'focused':''}
                            id={'1'}
                            onClick={this.props.changeTab}
                        >情感
                        </Item>
                    </Link>
                    <Link to={'/team'}>
                        <Item
                            className={this.props.tab.get(2)?'focused':''}
                            id={'2'}
                            onClick={this.props.changeTab}
                        >谣言
                        </Item>
                    </Link>
                </ItemWrapper>
            )
        }
    }

}

const mapState = (state /*, ownProps*/) => {
    return {
        tab:state.getIn(['header','tab']),
        isChangeTop:state.getIn(['header','isChangeTop']),
        deskWidth:state.getIn(['header','deskWidth']),
        deskHeight:state.getIn(['header','deskHeight']),
        isFold:state.getIn(['header','isFold']),
    }
};

const mapDispatch = (dispatch)=>{
    return{
        changeTab(e){
            dispatch(actionCreators.changeTab(e.target.id));
        },
        //控制头部是否变为黑色
        changeTopShow(){
            // console.log(document.documentElement.scrollTop);// 得到页面顶部距离屏幕顶部的距离
            if(document.documentElement.scrollTop>0){
                dispatch(actionCreators.changeTop(true));
            }
            else dispatch(actionCreators.changeTop(false));
        },
        //根据浏览器大小重设尺寸
        handleSize(){
            // console.log(document.documentElement.clientWidth)
            dispatch(actionCreators.reSize(document.documentElement.clientWidth,document.documentElement.clientHeight));
            if(document.documentElement.clientWidth>970) dispatch(actionCreators.changeFold(true));
        },
        //控制头部折叠
        changeFold(isFold){
            dispatch(actionCreators.changeFold(isFold));
        }
    }
};
export default connect(mapState,mapDispatch)(Header);
