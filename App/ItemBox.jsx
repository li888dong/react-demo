import React from 'react';
import Item from '../css/ItemBox.css';

class ItemBox extends React.Component {
    render() {
        return (
            <div>
                <OpenDate/>
                <RateStart/>
                <ProjectDetail/>
            </div>
        );

    }
}
var OpenDate=React.createClass({
    getInitialState:function(){
      return {
          _openDate:''
      }
    },
    componentDidMount: function() {
        $.get('../lib/secum_response.json', function(data) {
            var d=data;
            this.setState({
                _openDate:d.info.openDate
            });
        }.bind(this));
    },

    render:function(){
        var openDate=this.state._openDate;
        return(
            <div className={Item.item}>
                <p>开放日期 <span className={Item.floatR}>{openDate}</span></p>
                {this.state.username}
            </div>
        )
    }
});

var RateStart=React.createClass({
    render:function(){
        return(
            <div className={Item.item}>
                <p>起息日期 <span className={Item.floatR}>购买成功后下一交易日</span></p>
            </div>
        )
    }
});
var ProjectDetail=React.createClass({
    render:function(){
        return(
            <div className={Item.item}>
                <p>项目详情 <span className={Item.floatR}> ></span></p>
            </div>
        )
    }
});

export default ItemBox;