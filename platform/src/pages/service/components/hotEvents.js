import React, { PureComponent } from 'react';
import {
    Emotion,
    EventContent,
    EventItem,
    EventTitle,
    EventWrapper, HotEvent,
    HotTitle, InfoSource,
    Line
} from '../style';
import {actionCreators} from "../store";
import {connect} from 'react-redux';

class HotEvents extends PureComponent {

    render() {
        return (
            //当用户开始搜索后，隐藏该组件
            <HotEvent  className={this.props.isShowResult?'hidden':''}>
                <HotTitle/>
                <EventWrapper>
                    {/*     flex3*2布局       */}
                    {this.props.eventList.map((item)=>{
                        return(
                            <EventItem key={item.get('id')}>
                                <EventTitle>
                                    {item.get('title')}
                                    <Emotion>{item.get('emotion')}</Emotion>
                                </EventTitle>
                                <Line/>
                                <EventContent>{item.get('content')}</EventContent>
                            </EventItem>
                        )
                    })}
                </EventWrapper>
            </HotEvent>
        )
    }
}

const mapState = (state /*, ownProps*/) => {
    return {
        eventList:state.getIn(['service','eventList']),
        isShowResult:state.getIn(['service','isShowResult']),
    }
};


export default connect(mapState,null)(HotEvents);
