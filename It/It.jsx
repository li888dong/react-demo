import React from 'react';
import Item from '../css/ItemBox.css';
import ItemBox from '../App/ItemBox.jsx';
import Itcss from '../css/Itcss.css';
class It extends React.Component {
    render() {
        return (
            <div>
                <ProfitTabBox/>
                <NextPeriod/>
                <ItemBox/>
            </div>
        );
    }
}
var ProfitTabBox=React.createClass({
    getInitialState:function(){
      return {
          _expectIncome:'',
          _myInvest:'',
          _sumExpectIncome:'',
          _toEndDay:''
      }
    },
    componentDidMount: function() {
        $.get('./secum_response.json', function(data) {
            var d=data;
            this.setState({
                _expectIncome:d.info.expectIncome,
                _myInvest:d.info.myInvest,
                _sumExpectIncome:d.info.sumExpectIncome,
                _toEndDay:d.info.toEndDay

            });
        }.bind(this));
    },

    render:function(){
        return(
            <div className={Itcss.profitBox}>
                <div className={Itcss.link}>
                    <a href="#">三</a>
                </div>
                <div className={Itcss.x3}>
                    <div className={Itcss.expectIncome}>
                        <div className={Itcss.profitInfoBox}>
                            <p>{this.state._expectIncome}</p>
                            <p>预计本期收益(元)</p>
                        </div>
                    </div>
                    <div className={Itcss.rowBox}>
                        <div className={Itcss.profitInfoBox}>
                            <p>{this.state._myInvest}</p>
                            <p>我的已投金额(元)</p>
                        </div>
                        <div className={Itcss.profitInfoBox}>
                            <p>{this.state._sumExpectIncome}</p>
                            <p>已累计收益(元)</p>
                        </div>
                        <div className={Itcss.profitInfoBox}>
                            <p>{this.state._toEndDay}</p>
                            <p>距到期日(天)</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

var NextPeriod=React.createClass({
    render:function(){
        return(
            <div className={Itcss.nextPeriod}>
                <div className={Itcss.profitInfoBox}>
                    <p>- <span>%</span></p>
                    <p>下期预期年化收益率</p>
                </div>
                <div className={Itcss.profitInfoBox}>
                    <p>- <span>%</span></p>
                    <p>追加起投金额(元)</p>
                </div>
                <div className={Itcss.profitInfoBox}>
                    <p>- <span>%</span></p>
                    <p>项目周期</p>
                </div>
            </div>
        )
    }
});

export default It;