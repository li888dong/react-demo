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
                <Chart/>
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
        $.get('../lib/secum_response.json', function(data) {
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
var Chart=React.createClass({
    componentDidMount:function(){
        $(function(){
            var chart = new Highcharts.Chart({
//                初始化表单
                chart: {
                    renderTo: 'chart'
                },
                // ... 其他配置
//                数据
                series :  [
                    {
                        type:'column',
                        name: 'Tokyo',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
                    },
                    {
                        type:'column',
                        name: 'New York',
                        data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8],
                        zones:[{
                            value:20,
                            color:'red'
                        }]
                    },
                    {
                        type:'spline',
                        name: 'Berlin',
                        data: [0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6]
                    },
                    {
                        type:'line',
                        name: 'London',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0]
                    }
                ],
//                为图表配置标题：
                title: {
                    text: "平均气温"
                },
//                为图表配置副标题：
                subtitle : {
                    text: 'Source: runoob.com'
                },
//                配置要在 X 轴显示的项
                xAxis : {
                    categories: ['一月', '二月', '三月', '四月', '五月', '六月'
                        ,'七月']
                },
//                配置要在 Y 轴显示的项。
                yAxis : {
                    title: {
                        text: 'Temperature (\xB0C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
//                配置提示信息：
                tooltip : {
                    valueSuffix: '\xB0C'
                },
//                配置图表向右对齐：
                legend : {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                }
            });


        })
    },
    render:function(){
       return(
           <div id="chart" className={Itcss.chart}>

           </div>
       )
    }
});
export default It;